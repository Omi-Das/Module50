import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UserEditPage = async({params}) => {
  const { userid } = await params
  const user = await getUserById(userid)
  console.log('editing user', user)

  const updateUserWrapper = (formData) => {
    'use server'
    return updateUser(userid, formData)
  }
    return (
        <div>
            <h2>Editing User: {user?.name}</h2>
            <div className='w-1/2 mx-auto'>
 <form action={updateUserWrapper} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="role" defaultValue={user?.role}  type="tel">
                    <Label>role</Label>
                    <Input placeholder="Enter your role" />
                  </TextField>
                     <div className='flex'> 
                        <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update User</Button>
                     </div>
                </form>
            </div>
        </div>
    );
};

export default UserEditPage;