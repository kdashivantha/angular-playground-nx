module.exports = {
  name: 'cv-maker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cv-maker',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
