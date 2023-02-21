$('.heart-icon').on('click', () => {
    $('.activity-container').toggle();
  });

  $('.send-btn').on('click', () => {
    $('.share-link-cointainer').toggle();
  });

    let shareBtn = document.querySelector('.send-btn');
    let shareWindow = document.querySelector('.share-window');

    shareBtn.addEventListener('click', () => {
        shareWindow.changeIcon.toggle('active');
        changeIcon(shareBtn)
    })

    let posts = document.querySelectorAll('#share-link').ariavalueMax;
    let copyLinkBtn = document.querySelector('.copy-btn');

    copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(postLink).then(() => {
            shareBtn.click();
        })
    })