let main = document.querySelector('main');
let darkMode = document.getElementById('dark-mode');
let menu = document.getElementById('menu')
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let navigationLinks = document.querySelectorAll('li')
let quickIcons = document.getElementsByClassName('quick-icons');
let darkModeIcon = document.getElementById('dark-mode-icon');
let infoH3 = document.getElementById('info-h3');
let spanInfo = document.querySelectorAll('span');
let mainImage = document.getElementById('main-image');
let sectionTitle = document.getElementsByTagName('h2')
let project1 = document.getElementById('project1')
let project2 = document.getElementById('project2')
let project3 = document.getElementById('project3')
let project4 = document.getElementById('project4')
let seeProject1 = document.getElementById('see-project1')
let seeProject2 = document.getElementById('see-project2')
let seeProject3 = document.getElementById('see-project3')
let seeProject4 = document.getElementById('see-project4')
let code1 = document.getElementById('code1')
let code2 = document.getElementById('code2')
let code3 = document.getElementById('code3')
let code4 = document.getElementById('code4')
let contactImage = document.getElementById('contact-image');
let wordEmail = document.getElementById("word-email")
let wordLinkedin = document.getElementById("word-linkedin")
let wordGithub = document.getElementById("word-github")
let wordWhatsapp = document.getElementById("word-whatsapp")
let email = document.getElementById("email")
let linkedin = document.getElementById("linkedin")
let github = document.getElementById("github")
let whatsapp = document.getElementById("whatsapp")
let contactIcons = document.getElementsByClassName('contact-icon');
let backToTop = document.getElementById('back-to-top');
let backToTopIcon = document.getElementById('back-to-top-icon');

darkMode.addEventListener('click', function() {
    if (main.classList.contains('dark-bg')) {
        main.classList.remove('dark-bg');
        main.classList.add('light-bg');
        menu.classList.remove('dark-bg');
        menu.classList.add('light-bg');
        h1.style.color = '#d61c47';
        h3.style.color = '#d61c47';
        navigationLinks[0].classList.remove('emphasis-dark-mode')
        navigationLinks[1].classList.remove('emphasis-dark-mode')
        navigationLinks[2].classList.remove('emphasis-dark-mode')
        navigationLinks[0].classList.add('emphasis-light-mode')
        navigationLinks[1].classList.add('emphasis-light-mode')
        navigationLinks[2].classList.add('emphasis-light-mode')
        quickIcons[0].setAttribute('src', './images/linkedin-icon-black.svg')
        quickIcons[1].setAttribute('src', './images/github-icon-black.svg')
        quickIcons[2].setAttribute('src', './images/whatsapp-icon-black.svg')
        darkModeIcon.classList.remove('dark-mode-icon')
        darkModeIcon.classList.add('light-mode-icon')
        infoH3.style.color = '#000'
        spanInfo[0].style.color = '#d61c47'
        spanInfo[1].style.color = '#d61c47'
        spanInfo[2].style.color = '#d61c47'
        spanInfo[3].style.color = '#d61c47'
        spanInfo[4].style.color = '#d61c47'
        mainImage.setAttribute('src', './images/main-logo-light.svg')
        sectionTitle[0].style.color = 'rgb(57, 57, 57)'
        sectionTitle[1].style.color = 'rgb(57, 57, 57)'
        project1.style.background = '#393939'
        project2.style.background = '#393939'
        project3.style.background = '#393939'
        project4.style.background = '#393939'
        seeProject1.style.background = '#d61c47'
        seeProject1.style.color = '#f3f1ee'
        seeProject2.style.background = '#d61c47'
        seeProject2.style.color = '#f3f1ee'
        seeProject3.style.background = '#d61c47'
        seeProject3.style.color = '#f3f1ee'
        seeProject4.style.background = '#d61c47'
        seeProject4.style.color = '#f3f1ee'
        code1.style.background = '#000'
        code1.style.color = '#f3f1ee'
        code2.style.background = '#000'
        code2.style.color = '#f3f1ee'
        code3.style.background = '#000'
        code3.style.color = '#f3f1ee'
        code4.style.background = '#000'
        code4.style.color = '#f3f1ee'
        contactImage.setAttribute('src', './images/contact-logo-light.svg')
        contactIcons[0].setAttribute('src', './images/email-icon-black.svg')
        contactIcons[1].setAttribute('src', './images/linkedin-icon-black.svg')
        contactIcons[2].setAttribute('src', './images/github-icon-black.svg')
        contactIcons[3].setAttribute('src', './images/whatsapp-icon-black.svg')
        wordEmail.style.color = '#d61c47'
        wordLinkedin.style.color = '#d61c47'
        wordGithub.style.color = '#d61c47'
        wordWhatsapp.style.color = '#d61c47'
        email.style.color = '#393939'
        linkedin.style.color = '#393939'
        github.style.color = '#393939'
        whatsapp.style.color = '#393939'
        backToTopIcon.setAttribute('src', './images/back-to-top-icon-black.svg')
        backToTop.style.color = '#393939'
    } else {
        main.classList.remove("light-bg")
        main.classList.add('dark-bg')
        menu.classList.remove("light-bg")
        menu.classList.add('dark-bg')
        h1.style.color = '#eac7b2'
        h3.style.color = '#eac7b2'
        navigationLinks[0].classList.remove('emphasis-light-mode')
        navigationLinks[1].classList.remove('emphasis-light-mode')
        navigationLinks[2].classList.remove('emphasis-light-mode')
        navigationLinks[0].classList.add('emphasis-dark-mode')
        navigationLinks[1].classList.add('emphasis-dark-mode')
        navigationLinks[2].classList.add('emphasis-dark-mode')
        quickIcons[0].setAttribute('src', './images/linkedin-icon.svg')
        quickIcons[1].setAttribute('src', './images/github-icon.svg')
        quickIcons[2].setAttribute('src', './images/whatsapp-icon.svg')
        darkModeIcon.classList.remove('light-mode-icon')
        darkModeIcon.classList.add('dark-mode-icon')
        infoH3.style.color = '#fff'
        spanInfo[0].style.color = '#EAC7B2'
        spanInfo[1].style.color = '#EAC7B2'
        spanInfo[2].style.color = '#EAC7B2'
        spanInfo[3].style.color = '#EAC7B2'
        spanInfo[4].style.color = '#EAC7B2'
        mainImage.setAttribute('src', './images/main_logo.svg')
        sectionTitle[0].style.color = '#fff'
        sectionTitle[1].style.color = '#fff'
        project1.style.background = '#3e5159'
        project2.style.background = '#3e5159'
        project3.style.background = '#3e5159'
        project4.style.background = '#3e5159'
        seeProject1.style.background = '#EAC7B2'
        seeProject1.style.color = '#232622'
        seeProject2.style.background = '#EAC7B2'
        seeProject2.style.color = '#232622'
        seeProject3.style.background = '#EAC7B2'
        seeProject3.style.color = '#232622'
        seeProject4.style.background = '#EAC7B2'
        seeProject4.style.color = '#232622'
        code1.style.background = '#fff'
        code1.style.color = '#232622'
        code2.style.background = '#fff'
        code2.style.color = '#232622'
        code3.style.background = '#fff'
        code3.style.color = '#232622'
        code4.style.background = '#fff'
        code4.style.color = '#232622'
        contactImage.setAttribute('src', './images/contact-logo.svg')
        contactIcons[0].setAttribute('src', './images/email-icon.svg')
        contactIcons[1].setAttribute('src', './images/linkedin-icon.svg')
        contactIcons[2].setAttribute('src', './images/github-icon.svg')
        contactIcons[3].setAttribute('src', './images/whatsapp-icon.svg')
        wordEmail.style.color = '#EAC7B2'
        wordLinkedin.style.color = '#EAC7B2'
        wordGithub.style.color = '#EAC7B2'
        wordWhatsapp.style.color = '#EAC7B2'
        email.style.color = '#c4cccf'
        linkedin.style.color = '#c4cccf'
        github.style.color = '#c4cccf'
        whatsapp.style.color = '#c4cccf'
        backToTopIcon.setAttribute('src', './images/back-to-top-icon.svg')
        backToTop.style.color = '#fff'
    }
})

