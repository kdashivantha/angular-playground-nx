module.exports = {
  name: 'alexa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/alexa',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
