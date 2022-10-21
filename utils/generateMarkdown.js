// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) return "";
  return `[![License: ${license}](https://img.shields.io/badge/license-${license}-blue)]`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) return "";
  return `(${license})`;
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
  2.  [License](#license)\n
  3.  [Installations](#installation)\n
  4.  [Test](#test)\n
  5.  [Author Links](#author)\n

  
  ## Usage <a id="usage"></a>
  
  <ol>
      <li> </li>
      <li> </li>
      <li> </li>
      <li> </li>
  </ol>


  ## License  <a id="license"></a>

  ![License: ${data.license}](https://img.shields.io/badge/License-GPLv3-blue.svg)\n
  ![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

  ## installation <a id="installation"></a>

 ${data.dependencies}


  ## Test <a id="test"></a>

  put your test here 


  ## Author Links <a id="author"></a>

  GitHub: ${data.username}
  Email:  ${data.userEmail}

`;
}

module.exports = generateMarkdown;
