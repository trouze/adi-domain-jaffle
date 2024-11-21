module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Ensure subject starts with a JIRA issue key
    'header-match-regex': [2, 'always', '^([A-Z]+-\\d+)\\s+.+'],
    // Enforce type to follow conventional commits
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'build', 'ci', 'perf', 'revert']
    ],
    // Scope is optional, but if present, must be lowercase and match this regex
    'scope-case': [2, 'always', 'lower-case'],
    // Subject must not be empty
    'subject-empty': [2, 'never'],
    // Enforce footer to include JIRA keyword
    'footer-match-regex': [2, 'always', '^JIRA:\\s[A-Z]+-\\d+$'],
  }
};
