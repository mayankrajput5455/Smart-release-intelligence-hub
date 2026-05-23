const generateReleaseNotes = async () => {

  return {

    engineering: `
- Login feature completed
- Dashboard UI improved
- Jira integration connected
- GitHub API integration working
`,

    qa: `
- Payment flow testing pending
- API validation required
- UI regression testing in progress
`,

    executive: `
- Release readiness is improving
- Core modules completed
- Deployment preparation ongoing
`

  }

}

module.exports = {
  generateReleaseNotes
}