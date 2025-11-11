# 🎰 SpiinQuest: A Browser Game Collection 🎮

**SpiinQuest** is a mini-game collection developed as a PBL (Project-Based Learning) project. It features two engaging mini-games: a **Number Guessing Game** and a **Slot Machine**. This project showcases front-end development skills using HTML, CSS, and JavaScript.

## ✨ Features

* **Homescreen (`index.html`):** A landing page with navigation to the main menu and an "About Us" section.
* **Main Menu (`main_menu.html`):** Allows users to select between the two available mini-games.
* **Number Guessing Game:**
    * Guess a number between 1 and 100.
    * **Time Limit:** 30 seconds.
    * **Chances:** 6 attempts.
    * Provides hints ("Try a Lower Number!" / "Try a Higher Number!").
    * Includes a help/instruction modal.
* **Slot Machine Game:**
    * A classic three-reel slot machine interface.
    * **Win Condition:** Matching at least two symbols across the three reels.
    * Includes sound effects for spinning, winning, and losing.
* **About Us (`about_us.html`):** Provides details about the developer and the project's scope.
* **Responsive Design:** Styled using CSS to provide a decent experience across different screen sizes (as indicated by the `@media (max-width: 600px)` query).

## 🛠️ Tech Stack

This project is built using fundamental web technologies:

* **Frontend:** HTML5
* **Styling:** CSS3 (with custom styles in `style.css`)
* **Logic:** JavaScript (Vanilla JS in `script1.js` for Number Guessing and `script2.js` for Slot Machine)

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository (if hosted on GitHub) or download the files:**
    ```bash
    git clone [your-repo-link]
    cd SpiinQuest
    ```
    *(Note: Assuming you will place the files in a folder named 'SpiinQuest')*

2.  **Ensure all necessary files and folders are present:**
    * `index.html`
    * `main_menu.html`
    * `about_us.html`
    * `numguess.html`
    * `slotmachine.html`
    * `style.css`
    * `script1.js`
    * `script2.js`
    * A folder named `images` containing all background, logo, and reel images (e.g., `spin1.jpeg`, `bck.jpg`, `1.png` to `10.png`, etc.)
    * A folder named `sounds` containing the audio files (`spinning-sound.mp3`, `bingo-sound.mp3`, `losing-sound.mp3`).

3.  **Open `index.html`:**
    Simply double-click `index.html` in your file explorer. It will open in your default web browser.

## 🕹️ How to Play

### 1. Homescreen
Click the **"Play Now"** button to proceed to the main menu.

### 2. Main Menu
Select a game:
* Click **"Play"** under the **Number Guess** section.
* Click **"Play"** under the **Slot Machine** section.

### 3. Number Guessing Game
* A random number between 1 and 100 is generated.
* Enter your guess in the input box and click **"Guess"**.
* The game provides feedback (Higher/Lower) and counts down your 30 seconds and 6 remaining chances.
* Click the **info icon** $\Large\text{\textcircled{\text{i}}}$ to view instructions.

### 4. Slot Machine Game
* Click the **"SPIN"** button.
* The reels will spin for a set duration.
* If **two or more** images match across the three reels, you win (**BINGO!!**). Otherwise, you lose (**LOOSER!**).

## 👤 Developer

* **Name:** Abhay Singh
* **Role:** Developer
* **Program:** B.Tech 4th Year, ITM Universe
* **Skills:** C / C++ / Java / JavaScript / HTML / CSS / Database

---

*This project was created for a PBL Project.*
