module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)
  require('shipit-slack')(shipit)

  shipit.initConfig({
    default: {
      workspace: './dist',
      keepWorkspace: false,
      repositoryUrl: '', // Skip fetching repo
      ignores: ['.git', 'node_modules', 'deploy'],
      deleteOnRollback: true,
      shallowClone: false,
    },
    stg: {
      servers: ['...'],
      key: './deploy/keys/...-stg.pem',
      deployTo: '/var/www/...',
      build: '... build',
      outputDir: './dist'
    },
    prod: {
      servers: ['...'],
      key: './deploy/keys/...-prod.pem',
      deployTo: '/home/ec2-user/projects/...',
      build: '.. build',
      outputDir: './dist'
    },
  })

  shipit.blTask('deploy:environment', function () {
    shipit.local(
      `cp deploy/env/.env.${shipit.environment} .env`,
    )
  })

  shipit.blTask('deploy:build', async () => {
    await shipit.local(shipit.config.build);
  })

  shipit.on('deploy', async () => {
    await shipit.start(['deploy:environment','deploy:build']);
  })

  shipit.on('deployed', async () => {
    await shipit.local(`rm -rf ${shipit.config.outputDir}`);
  });
}
