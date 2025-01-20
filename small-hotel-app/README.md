# Small Hotel App *(internal app used inside the hotel)*
*using techs: React, ReactRouter for routing, Styled Components for styling, ReactQuery for remote state management, Context API as UI state management, React Hook Form as form management*
*Supabase - for creating API and DB (remote state)*
*Other tools: React icons, React hot toast for notification, Recharts, date-fns*

A small boutique hotel with 8 luxurious wooden cabins.
This custom-build app manage everything about the hotel: Bookings, Cabins and Guests.
This is internal app used inside the hotel to check in guests as they arrive.
API (todo: build)
Later: customer-facing website as well, where customers will be able to book stays, using the same API

Login: 
	username: lera@test.com
	password: lera12345


### Requirements:
- Users of the app are hotel employees. They need to be logged into the application to perform tasks
- New users can only be signed up inside the application (to guarantee that only actual hotel employees can get accounts)
- Users should be able to upload an avatar, and change their name and password

- App needs a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount
- Users should be able to update or delete a cabin, and to create new cabin (including uploading photo)

- App needs a table view with all bookings, showing arrival and departure dates, status, and paid amout, as well as cabin and guest data
- The booking status can be "unconfirmed" (booked but not yet checked in), "checked in", or "checked out". The table should be filtered by this important status
- Other booking data includes: number of guests, number of nights, guest observation, whether they booked breakfast, breakfast price

- Users should be able to delete, check in, or check out as the guest arrives (no editing necessary right now)
- Bookings may not have been paid yet on guest arrival. Therefore, on check in, users need to accept payment (outside the app), and then confirm that payment has been received (inside the app)
- On check in, the guest  should have the ability to add breakfast for the entire stay, if they hadn't already

- Guest data should contain: full name, email, national ID, nationality, and a country flag for easy identification

- The initial app screen should be a dashboard, to display important information for the last 7, 30, or 90 days:
	+ A list of guests checking in and out on the current day. Users should be able to perform these tasks from here
	+ Statistics on recent bookings, sales, check ins, and occupancy rate
	+ A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment)
	+ A chart showing statistics on stay durations, as this is an important metric for the hotel

- Users should be able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking

- App need a dark mode

### Feature Categories
1. Bookings
2. Cabins
3. Guests
4. Dashboard
5. Check in and out
6. App settings
7. Authentication 

### Pages
1. Dashboard		*/dashboard*
2. Bookings		*/bookings*
3. Cabins		*/cabins*
4. Booking check in		*/checkin/:bookingID*
5. App settings		*/settings*
6. User sign up		*/users*
7. Login		*/login*
8. Account settings		*/account*

