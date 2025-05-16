## Project Needs

1. We need a donation page where doner can donate
2. We need a payment page to make payment (make sure user login)
3. Request to the backend with the payment details such as user information and amount on our backend
4. Payment intent will be uniqune with expiration system
5. Once payment success then bkash or any other getway will request to our backend or spasific end point to fire a hook
6. We will get all information once payment success
7. Simple a input filed to get the amount input for payment for make payment/donation with some referrance thik like statement or transaction id

## Finance System - Deposit/Donation/Expense/Withdraw

1. System admin should be manage all of thing like
   - Deposit amount (Create)
   - Donation amount (Create)
   - Expense/withdraw amount (update from our current balance)

## Role based Access controll

1. Role guard auth guard
   - Creating new role (system admin only)
   - Assingin role to the user/employee (system admin only)
   - Assigning permission on specific role

## Front End

1. Fully battle test for push to our github
2. Initiall Project setup with nextjs
3. Tailwind css v3
4. dynamic modal/drawer
5. http client setup
6. Tanstack query and tanstack table
7. React hook from
8. Zod
9. All common component should be fully reusebale like button, input, textarea, dropdown, check box etc
10. All kind of permission types of tas guard
    - A component that will receive the permission and based on those permssion it will render
    - Navigation guard (1 guard will handle entire application)

## Backend

1. Nestjs
2. Postgresql
3. Drizzle ORM
