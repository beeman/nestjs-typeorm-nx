module.exports = {
  name: 'nestjs-typeorm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nestjs-typeorm',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
