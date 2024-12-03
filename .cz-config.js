module.exports = {
    types: [
      { value: 'feat', name: 'feat:     A new feature' },
      { value: 'fix', name: 'fix:      A bug fix' },
      { value: 'docs', name: 'docs:     Documentation only changes' },
      { value: 'style', name: 'style:    Code style changes (white-space, formatting, etc.)' },
      { value: 'refactor', name: 'refactor: Code changes without fixing bugs or adding features' },
      { value: 'perf', name: 'perf:     Performance improvements' },
      { value: 'test', name: 'test:     Adding or modifying tests' },
      { value: 'chore', name: 'chore:    Other changes (e.g., build or tooling updates)' },
      { value: 'revert', name: 'revert:   Reverting a previous commit' }
    ],
    scopes: [
      { name: 'data models' },
      { name: 'api' },
      { name: 'ui' },
      { name: 'build' },
      { name: 'deps' },
      { name: 'ci' },
      { name: 'other' } // Add your relevant scopes here
    ],
    messages: {
      type: "Select the type of change you're committing:",
      scope: '\nSpecify the scope of this change (optional):',
      subject: 'Write a short, imperative description of the change:\n',
      body: 'Provide a longer description of the change (optional). Use "|" to break new lines:\n',
      breaking: 'List any breaking changes (optional):\n',
      footer: 'Add JIRA issue key (e.g., ABC-123):\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    footerPrefix: 'JIRA:',
    subjectLimit: 72
  };
  