const setCategory = (filename) => {
  let image = ['jpg', 'png'];
  let video = ['mp4', 'avi'];
  let audio = ['mp3'];

  let arr = filename.split('.');
  let format = arr[arr.length - 1].toLowerCase();
  let category = 'Document';

  if (image.indexOf(format) != -1) {
    category = 'Image';
  }

  if (video.indexOf(format) != -1) {
    category = 'Video';
  }

  if (audio.indexOf(format) != -1) {
    category = 'Audio';
  }

  return category;

}

module.exports = setCategory;
