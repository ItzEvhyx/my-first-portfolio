<div align="center">

  <!-- Cloud Border / Scallop Header -->
  <img src="public/images/baa61f6494ea9efa8b02e16efa1b0b73.svg" width="100%" height="28" alt="Cloud Scallop Banner" />

  <br />

  <!-- Logo & Mascot Hero Header -->
  <a href="#readme">
    <img src="public/images/dcca05493962f89386c5ecf967cbe990.png" width="360" alt="It's Always Day One Logo" />
  </a>

  <br /><br />

  <img src="public/images/808f12872841f94ccc994cca0457c9bd.png" width="220" alt="Hanni Bunny Mascot waving hello" />

  <br />

  # 🌸 Sugar, Spice & Everything Git 🌸
  ### ☁️ *My First Portfolio Starter Template* ☁️

  <p align="center">
    <b>A bubbly, playful, beginner-friendly portfolio website template inspired by Powerpuff Girls vibes & Day One aesthetics!</b>
    <br />
    <i>Crafted with soft cloud blues, sweet berry pinks, and modular React components.</i>
  </p>

  <!-- Badges -->
  <p align="center">
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-cf3a6a?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-68d2f0?style=for-the-badge&logo=react&logoColor=0f3d5c" alt="React" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-7a2e57?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-cf3a6a?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-0f3d5c?style=for-the-badge" alt="MIT License" /></a>
  </p>

</div>

## Welcome! 🌸

Create a portfolio while learning how Git and GitHub work. You will create your own copy of this starter, edit its content, run it locally, and push your changes to your own repository. No React experience is required.

**Your workflow:** create your repository from the template → clone your repository → edit and preview → commit → push → optionally deploy.

## Before you begin

- A [GitHub account](https://github.com/).
- [Git](https://git-scm.com/) installed. Check with `git --version`.
- [Node.js](https://nodejs.org/) **20.9 or later** and npm. Check with `node --version` and `npm --version`.
- A code editor such as [VS Code](https://code.visualstudio.com/).
- A [Vercel account](https://vercel.com/) linked to GitHub if you plan to deploy.

## 1. Create your own repository

1. Sign in to GitHub and open the [starter repository](https://github.com/ItzEvhyx/my-first-portfolio).
2. Select **Use this template** → **Create a new repository**.
3. Choose your GitHub account as the owner, choose a name such as `my-portfolio`, and create the repository.
4. GitHub creates a new repository under your account containing the starter files. Its URL should start with `github.com/YOUR-USERNAME/`.

Your repository is your own copy. Your changes and pushes will not change the starter. If **Use this template** is missing, ask a facilitator for help.

## 2. Clone your repository

On **your new repository**, click **Code** and copy the HTTPS URL. Open a terminal and replace the example URL and folder name below with your own:

```bash
git clone https://github.com/YOUR-USERNAME/my-portfolio.git
cd my-portfolio
```

Cloning downloads your files and connects the folder to your GitHub repository. You do not need `git init` or `git remote add origin`.

Check the connection:

```bash
git remote -v
```

The `origin` URLs should contain **your username**. If they contain `ItzEvhyx`, you cloned the starter instead; ask a facilitator for help.

## 3. Install and run

From inside the project folder, run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, usually [http://localhost:3000](http://localhost:3000). Keep this terminal running while you edit. To stop the server, press **Ctrl+C** in that terminal. Use a second terminal for Git commands.

Open the project folder in your editor. Changes normally appear in the browser after you save the file; refresh if needed.

## 4. Personalize your portfolio ✏️

To change the content displayed in your portfolio, edit the JavaScript files in the **`content/`** folder (the folder name is singular). These files hold your portfolio information. The React files in `app/components/` handle the user interface and display that information, so you do not need to edit them to personalize your content.

| File | What to edit |
| --- | --- |
| `content/intro.js` | Name, role, tagline, bio and tags |
| `content/about.js` | Background, interests, goals and highlights |
| `content/skills.js` | Skill categories, names, descriptions and icons |
| `content/projects.js` | Projects, descriptions, tags, colors, icons and project links |
| `content/education.js` | Education, experience and certifications |
| `content/contact.js` | Email and profile URLs |
| `content/footer.js` | Footer social links |

Hanni and the intro background are part of the fixed design and have no editable image fields in `content/intro.js`.

### Add a skill

In `content/skills.js`, copy an existing skill line **inside a category’s `skills` list**, paste it on a new line, and edit the text. Keep the braces, quotation marks and comma:

```js
{ name: 'Canva', desc: 'I create posters and presentations.', icon: 'design' },
```

With the site running, visit [http://localhost:3000/icons](http://localhost:3000/icons) to see the available icons and their names. They are general symbols rather than brand logos. If a name is unknown, the site uses a fallback icon and displays a development tip.

For a balanced layout, aim for up to four categories, six skills per category, and descriptions under 100 characters. These are **suggestions**, not enforced limits: development tips appear when exceeded, but entries are not removed.

### Add a project and link

In `content/projects.js`, copy an existing project block and edit it, keeping the brackets, braces and commas. For example:

```js
{
  category: 'Web',
  title: 'My First Project',
  description: 'A website I created to practice my skills.',
  tags: ['HTML', 'CSS'],
  color: 'blue',
  icon: 'star',
  projectUrl: 'example.com',
},
```

Available colors: `blue`, `pink`, `green`. Available icons: `star`, `heart`, `plus`. Enter either `example.com` or `https://example.com`; the **View Project** button opens the external website in a new tab. Leave `projectUrl` as `''` to hide the button. There is no separate demo URL field.

### Update contact and social links

Change `email`, `github`, and `linkedin` in `content/contact.js`. Use complete profile URLs such as `https://github.com/your-username`. The email button opens a visitor’s email app.

In `content/footer.js`, add full URLs starting with `https://` to the existing social entries. Leave a footer `href` empty to hide that link. Only add contact details you are comfortable sharing publicly; never commit passwords, tokens, API keys or other secrets.

## 5. Review, commit and push to GitHub

Saved edits update your **local** files. They appear in GitHub only after you commit and push.

Open another terminal in the project folder and review what changed:

```bash
git status
git diff
```

If this is your first time using Git, configure your identity using your own name and GitHub-associated email (do not type the example values literally):

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then save your changes as a commit and push them to **your own** repository:

```bash
git add .
git commit -m "Personalize my portfolio"
git push origin main
```

When prompted, follow GitHub’s authentication instructions. A GitHub account password is not used as a Git password for HTTPS; use the authentication method presented by your Git client or facilitator.

Refresh your repository on GitHub to see the changes. If Git says there is nothing to commit, save your files and check `git status`. For future edits, repeat: **edit → save → review → commit → push**.

## 6. Optional: deploy your portfolio ☁️

1. Push your latest commit to **your** GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with GitHub and choose to add a new project.
3. Import your portfolio repository; authorize access if asked.
4. Review the detected Next.js settings and select **Deploy**.
5. Once deployment finishes, open the provided public URL and test it on desktop and mobile.

If your connected Vercel project is configured for automatic deployments, later pushes to the connected branch create new deployments. Check the deployment status before sharing updates.

## Troubleshooting

- **Syntax error after editing:** Check the reported line and the one above it for missing quotes, commas or brackets. Use double quotes for text containing an apostrophe, such as `"I'm learning"`. Undo the last edit if needed.
- **Project button is missing:** Add a valid website address in `projectUrl`. An empty or invalid address hides the button.
- **Push fails:** Check `git remote -v`, make sure you cloned your repository, and complete GitHub authentication. Ask a facilitator if you need help.
- **Site won’t start:** Check your Node.js version, run `npm install` in the project folder, and read the terminal error.
- **Changes do not appear:** Confirm the file is saved and the dev server is running. Refresh the page; if needed, stop and restart `npm run dev`.

## Finish the workshop 🎉

Check your portfolio in the browser, confirm your latest commit is visible in your own GitHub repository, and share your repository and deployed URL as instructed by your facilitators.

This project is available under the [MIT License](LICENSE).
