module.exports = {
   branch: 'master',
   plugins: [
      [
         '@semantic-release/commit-analyzer',
         {
            preset: 'angular',
            releaseRules: [
               { type: 'fix', release: 'patch' },
               { type: 'style', release: 'patch' },
               { type: 'docs', release: 'patch' },
               { type: 'perf', release: 'patch' },
               { type: 'refactor', release: 'patch' },
               { type: 'feat', release: 'minor' },
               { type: 'add', release: 'minor' },
               { scope: 'breaking', release: 'major' },
               { scope: 'major', release: 'major' },
               { scope: 'minor', release: 'minor' },
               { scope: 'patch', release: 'patch' },
               { scope: 'void', release: false },
               { type: 'ci', release: false },
               { type: 'chore', release: false },
            ],
            parserOpts: {
               noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            },
         },
      ],
      [
         '@semantic-release/changelog',
         {
            changelogFile: 'CHANGELOG.md',
            changelogTitle: '# Changelog',
         },
      ],
      [
         '@semantic-release/npm',
         {
            pkgRoot: './',
            npmPublish: true,
            tarballDir: 'pack',
         },
      ],
      [
         '@semantic-release/github',
         {
            assets: 'pack/*.tgz',
            addReleases: 'top',
         },
      ],
      [
         '@semantic-release/git',
         {
            message: 'chore(release): v${nextRelease.version}',
         },
      ],
   ],
};
