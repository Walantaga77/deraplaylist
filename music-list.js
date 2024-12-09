let allMusic = [
  
  {
    name: "Home",
    artist: "Luke Chiang",
    img: "https://lh3.googleusercontent.com/pw/AP1GczPq0H-zYvS35VawPlvybG2dpRAeTj0UL4YwcdqlEcw2DVa9n_CPeOlWDjNVQRK_NtYRmPPXuaoLCofHGzESjoIhKg6fey32H9IZHiUMbNIW5A9-s2gi-9MDt-PRWeucjKAeyDrhXz8tA-H5m6DElE2M=w684-h913-s-no-gm?authuser=0",
    src: "Home_luke_chiang.mp3",
  },
  {
    name: "A Thousand Years",
    artist: "Christina Perri",
    img: "https://lh3.googleusercontent.com/pw/AP1GczMnEoJW6SZEoKnQdt7WDEXP5-z_oziNALvyaUzrpv0NVzJXmtJQTEZqRUN7g91jDxEk5OIs9BAvUtupLN8wTrLtSSyXhJajzIlYveE6ynAX8GEi5KYUzGKg34OGpPhesTnx6G6ExNARyRsrKjX9J4ja=w913-h913-s-no-gm?authuser=0",
    src: "A_Thousand_Years_Christina_Perri.mp3",
  },
  {
    name: "About You",
    artist: "The 1975",
    img: "https://lh3.googleusercontent.com/pw/AP1GczOJvM-lzQMZp_IFsIpRuwCqDN4UIRqdGhNZ2mVq4yn9NTODGvSWu_r-MRFT5GFTU3j8a9YMk4AwPZHYBSpDQKsCWmV_bj-OxtmnLlzRNNZk8JrC2ucdJkmF_q0dFFWLWyn3CADvEdNeDQrF-eEO-iXc=w685-h913-s-no-gm?authuser=0",
    src: "About You_The_1975.mp3",
  },
  {
    name: "Beautiful Day",
    artist: "Coldiac",
    img: "https://lh3.googleusercontent.com/pw/AP1GczOTCm3PoJNeZxH-fwVvQXSkK_0VnaNlVPDwB-EKe4jaIiAls9fUK2LQ70VH9oFrnvxwBXHtVVoGg4Gfi6gQy1Eh3OruESC3qdX3DXV0M_81jIcFj3FSqpkO0qBZKX4AmdQq7OS9IOeW-x8f5IEhRYUM=w658-h846-s-no-gm?authuser=0",
    src: "Beautiful_Day_Coldiac.mp3",
  },
  {
    name: "Best Part",
    artist: "H.E.R · Daniel Caesar",
    img: "https://lh3.googleusercontent.com/pw/AP1GczOJ7sSEB_cX1XVDcR_y3pgFXDxaNtISPVliYt1hxYoj3846sWwUkrJr9Fw6yijH2R30tCH5YfxfmDFxZsCiwF8IXF-57iejnis66ApI_UPQem67M1GK44nKHI1d7XbBY938A6V-Hdq6q_x_u52FnYWt=w1216-h913-s-no-gm?authuser=0",
    src: "Best_Part_H.E.R._Daniel_Caesar.mp3",
  },
  {
    name: "Day Dreaming",
    artist: "Jack And Jack",
    img: "https://lh3.googleusercontent.com/pw/AP1GczNLaxTyEN_jXW6FAVUH8TATs371-Js9ApbFUklsZz8J1Bif9y1l8rwTl3ypWu4He3uUgQ4q5Kv089DWAj2adrSUQvDbeCqb9bfy1UpB_qv0TAkiHrQXCFUtevSZjlfhzowO98dFYxMZvgwN-j2lJ4O_=w514-h913-s-no-gm?authuser=0",
    src: "Day_Dreaming_Jack_And_Jack.mp3",
  },
  {
    name: "Love U Like That",
    artist: "Lauv",
    img: "https://lh3.googleusercontent.com/pw/AP1GczM14U0mtiWMHkX74NbY4vDruBllEUonLnROj9Q7y-UmtF56nOvqsvHoXhrjeYgKvkYAONDckSsZtwftAC2fDC39lzdIoi08h46w0KfzWsenKjdgodk1vlkDe54iBqiGw__p7VQOnlguD8lsf3_ov4IQ=w1280-h720-s-no-gm?authuser=0",
    src: "Love_U_Like_That_Lauv.mp3",
  },
  {
    name: "Old Love",
    artist: "Yuji Putri Dahlia",
    img: "https://lh3.googleusercontent.com/pw/AP1GczMF5ZfdUtwHgRJglP7js0h8vFxZUddJPka9ZKX6428h3zxU7OgF47sS7KGIAlBp_iToLrwbwZGJvJgriqA4WhDi01NhZdIs3TlIZa9WbTC2KmeI0BWPFBjYLcY2efyXgPs8PpXnoki57JVUNQWpQZvf=w1080-h700-s-no-gm?authuser=0",
    src: "Old Love_yuji_Putri_Dahlia.mp3",
  },
  {
    name: "Say You Won't Let Go",
    artist: "James Arthur",
    img: "https://lh3.googleusercontent.com/pw/AP1GczNo1nfWk6RtCx1qs6a5K9c5lvm9c10-D45uLIRgMSJJ1naPqNhIH4OKHDOvaj_oPfB2sloVMHE-CGUdJ2NqlLb97RVQcCc07DINbbJBw-PI1TQuaFvLR6VNwvGFUAoU9M95wFNoMdAQEN044QRHTRMi=w685-h913-s-no-gm?authuser=0",
    src: "Say_You_Won't_Let_Go_James Arthur.mp3",
  },
  {
    name: "The Simple Things",
    artist: "Michael Carreon",
    img: "https://lh3.googleusercontent.com/pw/AP1GczMHOGpsdbsylZa3qlG1gdJjwJCP1hDFNriCsDCyIvcEhDBsFRKE853xGrl9v1dJ9eRY-IkKqvzP5AFTn6aYhfxcPiwlsCnL4Fit9fCCRpRtEhwjLRo5Q2gvQXbVugUiIAaCfrW0Vr2fo1txK8wIo7JB=w1079-h913-s-no-gm?authuser=0",
    src: "The_Simple_Things.mp3",
  },
];
