# EPIC Manager
An app for managers to track team performance, featuring a built in message board and authentication.

---

## Powered by
* Node.js
* Express / EJS
* MongoDB & Mongoose
* Bootstrap (Bootswatch theme)
---

## Key features
* Team message board
* Performance review tracking
* Authentication: seperate permissions for managers and team
* Sales target tracking

## To Do 
- [ ] Team message board
    - [x] Display messages
    - [x] Create add message form, add message button
    - [ ] Edit and delete messages
    - [ ] Special styling for manager messages
    - [ ] Add date created to new messages
- [ ] Performance tracker
- [ ] Authentication
    - [x] Create register and login pages
    - [x] Create basic auth & validation using passport
    - [ ] User cannot access anything unless logged in
    - [ ] Logout function
- [ ] Profiles and permissions
    - [ ] Create basic profile view: add bio, picture
    - [ ] Managers can edit or delete anything
    - [ ] Team can only edit/delete own contributions
- [ ] Sales target tracker
    - [ ] Create target tracker dashboard