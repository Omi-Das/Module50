"use client"
import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserTable = ({ users, deleteUserAction }) => {
  
  const handleDelete = async (userId) => {
    try {
      await deleteUserAction(userId);
      // এখানে আপনি চাইলে একটি টোস্ট (Toast) মেসেজ দেখাতে পারেন
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  }

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {users?.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell className="flex gap-2 items-center">
                  <Link href={`/users/${user._id}`} className='text-blue-500'>
                    View
                  </Link>
                  
                  <Link href={`/users/${user._id}/edit`}>
                    <Button size="sm" variant='outline'>Edit</Button>
                  </Link>

                  <AlertDialog>
                    <Button size="sm" color="danger" variant="flat">Delete</Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            <p>
                              This will permanently delete <strong>{user.name}</strong>.
                              This action cannot be undone.
                            </p>
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            {/* Cancel বাটন ডায়ালগ বন্ধ করবে */}
                            <Button slot="close" variant="tertiary">Cancel</Button>
                            
                            {/* Confirm বাটন ডিলিট কল করবে */}
                            <Button 
                              slot="close" 
                              onClick={() => handleDelete(user._id)} 
                              color="danger"
                            >
                              Confirm Delete
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UserTable;
