/* =========================================================
   CV BUILDER - SHARED AUTHENTICATION & USER SESSION
   File: auth.js

   Main login/session key:
   greenAuthUser

   This file makes the logged-in user available across:
   - Dashboard
   - Profile
   - Settings
   - Templates
   - Create CV
   - Editor

   ========================================================= */

(function () {
    "use strict";

    // =====================================================
    // 1. MAIN SESSION KEY
    // =====================================================

    const SESSION_KEY = "greenAuthUser";


    // =====================================================
    // 2. READ CURRENT LOGGED-IN USER
    // =====================================================

    function readUser() {
        try {
            const storedUser = localStorage.getItem(SESSION_KEY);

            if (!storedUser) {
                return null;
            }

            return JSON.parse(storedUser);

        } catch (error) {
            console.error("Could not read logged-in user:", error);
            return null;
        }
    }


    // =====================================================
    // 3. GET USER NAME
    // =====================================================

    function getUserName(user) {

        if (!user) {
            return "User";
        }

        return (
            user.full_name ||
            user.name ||
            user.fullName ||
            user.username ||
            "User"
        );
    }


    // =====================================================
    // 4. GET FIRST NAME
    // =====================================================

    function getFirstName(name) {

        if (!name) {
            return "User";
        }

        return name.trim().split(/\s+/)[0];
    }


    // =====================================================
    // 5. GET USER INITIALS
    // =====================================================

    function getInitials(name) {

        if (!name) {
            return "U";
        }

        const words = name.trim().split(/\s+/);

        if (words.length === 1) {
            return words[0].substring(0, 2).toUpperCase();
        }

        return (
            words[0].charAt(0) +
            words[words.length - 1].charAt(0)
        ).toUpperCase();
    }


    // =====================================================
    // 6. KEEP OLD STORAGE KEYS SYNCHRONIZED
    // =====================================================
    /*
       Some of your existing pages were using:

       loggedInUser
       cvbuilder_user

       Your login page uses:

       greenAuthUser

       For now, this function keeps the old keys
       synchronized so your existing pages continue working.
    */

    function syncLegacyUser(user) {

        if (!user) {
            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("cvbuilder_user");
            return;
        }

        const userData = JSON.stringify(user);

        localStorage.setItem("loggedInUser", userData);
        localStorage.setItem("cvbuilder_user", userData);
    }


    // =====================================================
    // 7. CHECK IF USER IS LOGGED IN
    // =====================================================

    function requireLogin() {

        const user = readUser();

        if (!user) {

            alert("Please log in first.");

            window.location.href = "login-index.html";

            return null;
        }

        // Keep older pages synchronized
        syncLegacyUser(user);

        return user;
    }


    // =====================================================
    // 8. UPDATE HTML ELEMENT
    // =====================================================

    function updateElement(id, value) {

        const element = document.getElementById(id);

        if (!element) {
            return;
        }

        if (value === undefined || value === null || value === "") {
            return;
        }

        // If it is an input field
        if (
            element.tagName === "INPUT" ||
            element.tagName === "TEXTAREA" ||
            element.tagName === "SELECT"
        ) {
            element.value = value;
        }

        // Normal HTML element
        else {
            element.textContent = value;
        }
    }


    // =====================================================
    // 9. FILL USER INFORMATION THROUGHOUT THE WEBSITE
    // =====================================================

    function fillUserInformation() {

        const user = readUser();

        if (!user) {
            return;
        }

        const name = getUserName(user);
        const firstName = getFirstName(name);
        const initials = getInitials(name);

        // -------------------------------------------------
        // BASIC INFORMATION
        // -------------------------------------------------

        const email =
            user.email ||
            user.email_address ||
            "";

        const phone =
            user.phone ||
            user.phone_number ||
            "";

        const location =
            user.location ||
            user.current_location ||
            user.address ||
            "";

        const jobTitle =
            user.job_title ||
            user.professional_title ||
            user.title ||
            "";


        // -------------------------------------------------
        // NAVIGATION / TOP BAR
        // -------------------------------------------------

        updateElement("topUserName", name);
        updateElement("topProfileName", name);
        updateElement("userName", name);

        updateElement("welcomeName", firstName);


        // -------------------------------------------------
        // PROFILE PAGE
        // -------------------------------------------------

        updateElement("displayProfileName", name);
        updateElement("displayProfileTitle", jobTitle);
        updateElement("displayLocation", location);


        // -------------------------------------------------
        // SETTINGS PAGE
        // -------------------------------------------------

        updateElement("settingsName", name);
        updateElement("settingsJobTitle", jobTitle);


        // -------------------------------------------------
        // FORM FIELDS
        // -------------------------------------------------

        updateElement("fullName", name);
        updateElement("email", email);
        updateElement("phone", phone);
        updateElement("location", location);


        // -------------------------------------------------
        // AVATARS
        // -------------------------------------------------

        const avatarElements = [
            "userAvatar",
            "topAvatar",
            "topProfileAvatar"
        ];

        avatarElements.forEach(function (id) {

            const avatar = document.getElementById(id);

            if (!avatar) {
                return;
            }

            // If avatar is an image
            if (avatar.tagName === "IMG") {

                if (user.profile_picture) {
                    avatar.src = user.profile_picture;
                }
                else if (user.avatar) {
                    avatar.src = user.avatar;
                }
                else {
                    avatar.alt = name;
                }
            }

            // If avatar is a normal div/span
            else {

                avatar.textContent = initials;
            }
        });


        // -------------------------------------------------
        // MAKE SURE OLD PAGES ALSO SEE THE USER
        // -------------------------------------------------

        syncLegacyUser(user);
    }


    // =====================================================
    // 10. LOGOUT FUNCTION
    // =====================================================

    function logout() {

        const confirmLogout = confirm(
            "Are you sure you want to log out?"
        );

        if (!confirmLogout) {
            return;
        }

        // Remove main session
        localStorage.removeItem(SESSION_KEY);

        // Remove old session keys
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("cvbuilder_user");

        // Redirect to login page
        window.location.href = "login-index.html";
    }


    // =====================================================
    // 11. AUTOMATICALLY CONNECT LOGOUT BUTTONS
    // =====================================================

    function attachLogoutButtons() {

        const logoutButtons = document.querySelectorAll(
            "#logoutBtn, .logout-btn, [data-action='logout']"
        );

        logoutButtons.forEach(function (button) {

            // Prevent duplicate event listeners
            if (button.dataset.authConnected === "true") {
                return;
            }

            button.dataset.authConnected = "true";

            button.addEventListener("click", function (event) {

                event.preventDefault();

                logout();
            });
        });
    }


    // =====================================================
    // 12. MAKE FUNCTIONS AVAILABLE TO OTHER FILES
    // =====================================================

    window.CVBuilderAuth = {

        SESSION_KEY: SESSION_KEY,

        readUser: readUser,

        requireLogin: requireLogin,

        getUserName: getUserName,

        getFirstName: getFirstName,

        getInitials: getInitials,

        fillUserInformation: fillUserInformation,

        logout: logout,

        syncLegacyUser: syncLegacyUser
    };


    // =====================================================
    // 13. RUN WHEN PAGE LOADS
    // =====================================================

    document.addEventListener("DOMContentLoaded", function () {

        // Fill user information
        fillUserInformation();

        // Connect logout buttons
        attachLogoutButtons();

    });


})();