// JS scripts placed here

    const profileButtons = document.querySelectorAll(".profile-toggle");
    const overlays = document.querySelectorAll(".profile-overlay");

    profileButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const profileId = button.getAttribute("aria-controls");
        const profile = document.getElementById(profileId);

        if (!profile) {
        console.error("Could not find profile:", profileId);
        return;
        }

        const overlay = profile.closest(".profile-overlay");

        overlays.forEach(function(item) {
        item.hidden = true;
        });

        profileButtons.forEach(function(item) {
        item.setAttribute("aria-expanded", "false");
        });

        overlay.hidden = false;
        button.setAttribute("aria-expanded", "true");
    });
    });

    document.querySelectorAll(".close-profile").forEach(function(button) {
    button.addEventListener("click", function() {
        const overlay = button.closest(".profile-overlay");
        overlay.hidden = true;

        const profile = overlay.querySelector(".character-profile");
        const matchingButton = document.querySelector(
        '.profile-toggle[aria-controls="' + profile.id + '"]'
        );

        if (matchingButton) {
        matchingButton.setAttribute("aria-expanded", "false");
        }
    });
    });

    /* Close the profile when the dark background is clicked */
    overlays.forEach(function(overlay) {
    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
        overlay.hidden = true;

        const profile = overlay.querySelector(".character-profile");
        const matchingButton = document.querySelector(
            '.profile-toggle[aria-controls="' + profile.id + '"]'
        );

        if (matchingButton) {
            matchingButton.setAttribute("aria-expanded", "false");
        }
        }
    });
    });

    /* Close the profile by pressing Escape */
    document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        overlays.forEach(function(overlay) {
        overlay.hidden = true;
        });

        profileButtons.forEach(function(button) {
        button.setAttribute("aria-expanded", "false");
        });
    }
    });

    
    

        const applicationForm = document.getElementById("clan-application");
        const applicationPopup = document.getElementById("application-popup");
        const popupMessage = document.getElementById("popup-message");
        const popupClose = document.getElementById("popup-close");
        const popupConfirm = document.getElementById("popup-confirm");

        if (applicationForm && applicationPopup) {
        applicationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const applicantName = document
            .getElementById("applicant-name")
            .value.trim();

            if (!applicantName) {
            return;
            }

            popupMessage.textContent =
            "Thank you for applying, " + applicantName +
            "! You've been added to the waitlist!";

            // Hide the form and show the pop-up
            applicationForm.hidden = true;
            applicationPopup.hidden = false;

            popupClose.focus();
        });

        function closeApplicationPopup() {
            applicationPopup.hidden = true;
        }

        popupClose.addEventListener("click", closeApplicationPopup);
        popupConfirm.addEventListener("click", closeApplicationPopup);

        applicationPopup.addEventListener("click", function(event) {
            if (event.target === applicationPopup) {
            closeApplicationPopup();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape" && !applicationPopup.hidden) {
            closeApplicationPopup();
            }
        });
        }


        const claimFilter = document.getElementById("claim-filter");

        if (claimFilter) {
            const catCards = document.querySelectorAll(".cat-card");

            claimFilter.addEventListener("change", function () {
                const selectedStatus = claimFilter.value;

                catCards.forEach(function (card) {
                    const claimStatus = card.dataset.claim;

                    if (
                        selectedStatus === "all" ||
                        claimStatus === selectedStatus
                    ) {
                        card.hidden = false;
                    } else {
                        card.hidden = true;
                    }
                });
            });
        }


    

        const profileParams = new URLSearchParams(window.location.search);
        const requestedProfile = profileParams.get("profile");

        if (requestedProfile) {
            const profileButton = document.querySelector(
                `[aria-controls="${requestedProfile}"]`
            );

            if (profileButton) {
                profileButton.click();
            }
        }
