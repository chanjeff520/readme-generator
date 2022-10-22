// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) return "";
  return `![License:${license}]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) return "";
  return `(https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} \n

  ## Technology Used
  
  <ul>
      <li> </li>
      <li> </li>
      <li> </li>
      <li> </li>
  </ul>


  ## Description 

  ${data.description}


  ## Table of Contents

  1.  [Usage](#usage)\n
  2.  [Installations](#installation)\n
  3.  [License](#license)\n
  4.  [Author Links](#author)\n
  5.  [Contributors](#collab)\n
  6.  [Tests](#test)


  ## installation <a id="installation"></a>

  Dependencies needed: ${data.dependencies}
  Installation : ${data.installation}


  ## Usage <a id="usage"></a>
  
  ${data.usage}


  ## License  <a id="license"></a>

  ${renderLicenseSection(data.license)}


  ## Contributors <a id="collab"></a>


  ## Test <a id="test"></a>

  ${data.test}


  ## Author Links <a id="author"></a>

  You can reach me on\n
  GitHub: [__${data.username}__](${data.profile})\n
  Email:  __${data.userEmail}__


`;
}

module.exports = generateMarkdown;
