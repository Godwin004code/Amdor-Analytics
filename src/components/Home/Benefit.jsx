import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Benefit = () => {
  const Benefits = [
    {
      title: "Instructor-led program",
      description: "Join our Engaging, live sessions with dynamic discussions.",
      li1: "Learn from top industry professionals and mentors.",
      li2: "Connect with a global community of peers and experts.",
      li3: "Career counseling and job placement assistance." ,
      icon: `<svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_151_1231)">
      <path d="M1.99219 1.99219H100.008V69.1927H1.99219V1.99219Z" fill="#FF9D2B"/>
      <path d="M98.0156 3.98438V67.2005H3.98438V3.98438H98.0156ZM102 0H0V71.1848H102V0Z" fill="white"/>
      <path d="M6.375 94.0552V102H75.8147V94.0552C75.8147 81.9666 58.7695 75.8306 41.3578 75.8546C24.0577 75.8705 6.375 81.2494 6.375 94.0552Z" fill="#F2F2F2"/>
      <path d="M35.692 83.8392H46.5694L41.0072 107.22L35.692 83.8392Z" fill="#455A64"/>
      <path d="M41.0551 71.8622H33.8194V79.5042C33.8194 82.9627 36.7679 85.7677 40.4016 85.7677H41.7165C45.3502 85.7677 48.2987 82.9627 48.2987 79.5042V71.8622H41.0551ZM66.7463 41.5491C66.7463 41.5491 71.4399 42.3619 71.4399 47.422C71.4399 51.8845 68.0133 53.6456 64.5868 53.6456V41.5491H66.7463ZM15.5232 41.5491C15.5232 41.5491 10.8296 42.3619 10.8296 47.422C10.8296 51.8845 14.2562 53.6456 17.6827 53.6456V41.5491H15.5232Z" fill="#C48E6A"/>
      <path d="M41.1347 8.42293C20.894 8.42293 15.6028 24.1134 15.6028 46.155C15.6028 69.0093 30.2892 74.9221 41.1347 74.9221C51.8208 74.9221 66.6665 69.1846 66.6665 46.155C66.6665 24.1134 61.3673 8.42293 41.1347 8.42293Z" fill="#E0BB95"/>
      <path d="M32.7197 48.203C32.7197 50.4821 31.1977 52.3229 29.3091 52.3229C27.4285 52.3229 25.8905 50.4741 25.8905 48.203C25.8905 45.924 27.4205 44.0752 29.3091 44.0752C31.1977 44.0752 32.7197 45.916 32.7197 48.203ZM49.5338 48.203C49.5338 50.4821 51.0558 52.3229 52.9524 52.3229C54.833 52.3229 56.363 50.4741 56.363 48.203C56.363 45.924 54.833 44.0752 52.9524 44.0752C51.0638 44.0752 49.5338 45.916 49.5338 48.203Z" fill="#444444"/>
      <path d="M48.5217 62.1243H33.7476C32.9029 62.1243 32.5364 62.6901 33.0942 63.5508C33.8751 64.7461 36.7917 67.0411 41.1346 67.0411C45.4776 67.0411 48.3942 64.7461 49.1751 63.5508C49.7329 62.6901 49.3664 62.1243 48.5217 62.1243Z" fill="#5D4037"/>
      <path d="M44.7047 55.845C43.4457 56.2036 42.1388 56.3709 41.1347 56.3709C40.1307 56.3709 38.8238 56.1956 37.5647 55.845C37.0308 55.6936 36.8157 56.2036 37.0069 56.5382C37.4054 57.2395 39.015 58.6579 41.1347 58.6579C43.2544 58.6579 44.8641 57.2395 45.2625 56.5382C45.4538 56.1956 45.2386 55.6856 44.7047 55.845Z" fill="#C48E6A"/>
      <path d="M41.7403 5.54621C41.7403 5.54621 41.3419 5.53027 41.1745 5.53824C41.0072 5.53824 40.6087 5.54621 40.6087 5.54621C18.7664 5.96855 12.1842 19.109 12.1842 28.2173C12.1842 37.0706 12.1922 43.581 12.1922 43.581C12.1922 43.581 12.5428 43.2225 13.1803 42.7204C13.8656 42.1865 14.6226 41.8917 14.6226 41.8917L15.7223 49.2867L22.9978 34.0823C23.0456 33.9867 23.1412 33.9309 23.2448 33.9468L27.5559 34.425C31.8909 34.9031 36.2498 35.1421 40.6008 35.1501V35.1581C40.792 35.1581 40.9753 35.1501 41.1665 35.1501C41.3578 35.1501 41.5411 35.1581 41.7323 35.1581V35.1421C46.0833 35.1262 50.4422 34.8951 54.7772 34.417L59.0883 33.9389C59.1919 33.9309 59.2875 33.9867 59.3353 34.0743L66.6108 49.2787L67.7105 41.8837C67.7105 41.8837 68.4675 42.1865 69.1528 42.7125C69.7983 43.2145 70.1409 43.5731 70.1409 43.5731C70.1409 43.5731 70.1489 37.0706 70.1489 28.2093C70.1648 19.109 63.5826 5.96855 41.7403 5.54621Z" fill="#BFA055"/>
      <path d="M32.7276 48.3384C32.7276 50.6016 31.2136 52.4424 29.333 52.4424C27.4603 52.4424 25.9303 50.6095 25.9303 48.3384C25.9303 46.0674 27.4523 44.2345 29.333 44.2345C31.2136 44.2345 32.7276 46.0674 32.7276 48.3384ZM49.462 48.3384C49.462 50.6016 50.9761 52.4424 52.8647 52.4424C54.7373 52.4424 56.2594 50.6095 56.2594 48.3384C56.2594 46.0674 54.7373 44.2345 52.8647 44.2345C50.9761 44.2345 49.462 46.0674 49.462 48.3384Z" fill="#5D4037"/>
      <path d="M25.0618 91.2342L31.2854 86.3095L23.8665 83.3611L33.7318 75.5596L41.0072 107.219L25.0618 91.2342ZM50.8566 86.2139L57.2077 91.2342L41.0072 107.219L48.5377 75.5596L58.403 83.3611L50.8566 86.2139Z" fill="#E0E0E0"/>
      <path d="M32.3212 40.7761H22.8783C22.6073 40.7761 22.3364 40.8 22.0734 40.8319C22.695 40.9355 23.2289 41.2702 23.5795 41.7324H32.3133C35.0625 41.7324 37.3017 43.8043 37.3017 46.3543V50.8885C37.3017 53.4385 35.0625 55.5104 32.3133 55.5104H22.8783C20.129 55.5104 17.8898 53.4385 17.8898 50.8885V46.9918H17.1886C17.077 46.9918 16.9654 46.9758 16.8539 46.9599V50.8885C16.8539 53.9644 19.5553 56.4666 22.8703 56.4666H32.3133C35.6283 56.4666 38.3297 53.9644 38.3297 50.8885V46.3543C38.3376 43.2783 35.6362 40.7761 32.3212 40.7761Z" fill="#231F20" stroke="#231F20" stroke-width="0.383297" stroke-miterlimit="10"/>
      <path d="M22.0734 40.8318C21.93 40.8079 21.7865 40.792 21.6431 40.792H17.1886C15.8817 40.792 14.8059 41.7801 14.8059 42.9993V44.7923C14.8059 45.9 15.6984 46.8164 16.8539 46.9678V46.3621C16.8539 43.5332 19.1329 41.1984 22.0734 40.8318Z" fill="black"/>
      <path d="M17.8898 46.9917V46.3542C17.8898 43.8042 20.129 41.7323 22.8782 41.7323H23.5874C23.2368 41.2701 22.7029 40.9355 22.0813 40.8319C19.1409 41.1984 16.8618 43.5333 16.8618 46.3542V46.9598C16.9734 46.9758 17.077 46.9917 17.1965 46.9917H17.8898Z" fill="black" stroke="black" stroke-width="0.383297" stroke-miterlimit="10"/>
      <path d="M49.5656 40.7761H59.0086C59.2795 40.7761 59.5504 40.8 59.8134 40.8319C59.1918 40.9355 58.6579 41.2702 58.3073 41.7324H49.5656C46.8164 41.7324 44.5772 43.8043 44.5772 46.3543V50.8885C44.5772 53.4385 46.8164 55.5104 49.5656 55.5104H59.0086C61.7578 55.5104 63.997 53.4385 63.997 50.8885V46.9918H64.6983C64.8098 46.9918 64.9214 46.9758 65.0329 46.9599V50.8885C65.0329 53.9644 62.3315 56.4666 59.0165 56.4666H49.5656C46.2506 56.4666 43.5492 53.9644 43.5492 50.8885V46.3543C43.5492 43.2783 46.2426 40.7761 49.5656 40.7761Z" fill="#231F20" stroke="#231F20" stroke-width="0.383297" stroke-miterlimit="10"/>
      <path d="M59.8135 40.8318C59.9569 40.8079 60.1004 40.792 60.2438 40.792H64.6983C66.0052 40.792 67.081 41.7801 67.081 42.9993V44.7923C67.081 45.9 66.1885 46.8164 65.033 46.9678V46.3621C65.025 43.5332 62.7539 41.1984 59.8135 40.8318Z" fill="black"/>
      <path d="M63.9971 46.9917V46.3542C63.9971 43.8042 61.7579 41.7323 59.0087 41.7323H58.2994C58.6501 41.2701 59.184 40.9355 59.8055 40.8319C62.746 41.1984 65.0251 43.5333 65.0251 46.3542V46.9598C64.9135 46.9758 64.8099 46.9917 64.6904 46.9917H63.9971Z" fill="black" stroke="black" stroke-width="0.383297" stroke-miterlimit="10"/>
      <path d="M44.123 46.9917H37.6205L36.7439 42.8081H45.0792L44.123 46.9917Z" fill="#231F20"/>
      <path d="M84.3492 92.557L81.7513 92.055L93.1865 38.0029H94.1826L84.3492 92.557Z" fill="#F2F2F2"/>
      <path d="M81.0183 85.8234C82.2136 86.1183 82.9787 86.9629 83.5126 88.0148C84.8433 87.7758 87.1383 87.5367 87.8077 87.5526C88.5966 87.5765 89.6405 87.6642 89.8158 89.2818C89.9274 90.3337 89.529 91.2023 88.1822 91.3298C87.6802 91.3776 87.1622 91.4095 86.6522 91.4334L86.8355 92.0231C87.3057 92.0151 87.728 91.9992 88.0547 91.9992C89.4174 91.9833 90.1904 92.7084 90.1904 94.1508C90.1904 95.4178 89.0986 96.0154 88.3018 96.0633C87.8794 96.0872 86.7001 96.0234 85.5366 95.9118L85.4171 96.1589L85.3693 96.2306C86.1024 96.3422 86.8037 96.4617 87.2977 96.5494C88.6285 96.7884 89.266 97.6729 89.1146 98.7248C88.9313 99.9998 87.7918 100.35 87.0029 100.327C86.4132 100.311 84.3413 99.9839 82.9547 99.689L82.6838 100.08C82.7794 100.095 82.883 100.111 82.9946 100.127C83.0105 100.127 83.0265 100.135 83.0504 100.135L83.3293 100.183C83.3532 100.183 83.3691 100.191 83.393 100.191C83.5046 100.207 83.6161 100.231 83.7277 100.247H83.7436C83.8632 100.263 83.9827 100.287 84.1022 100.311C84.1261 100.311 84.1501 100.319 84.166 100.319L84.4449 100.366C84.4847 100.374 84.5166 100.382 84.5565 100.382C84.6361 100.398 84.7158 100.414 84.7876 100.422L84.9071 100.446C84.9868 100.462 85.0585 100.478 85.1302 100.486L85.2418 100.51C85.3454 100.534 85.4569 100.55 85.5526 100.574C86.7718 100.829 87.234 101.378 87.0826 102.343C86.8754 103.697 85.5127 104 84.7876 103.928C84.0624 103.865 81.624 103.363 80.8271 103.012L80.6836 102.94L80.4047 103.339C76.8188 103.1 74.2449 101.602 74.2449 101.602C72.1411 100.422 71.7905 99.5137 71.4399 98.0714C71.0415 96.4298 71.1371 94.4854 71.153 94.1826C71.2805 90.9154 72.0057 88.8037 74.6433 87.0506C75.2808 86.6283 76.2132 85.8872 78.2771 85.6481C79.0819 85.5684 80.2215 85.6322 81.0183 85.8234Z" fill="#E0BB95"/>
      <path d="M84.0066 91.2501C84.0066 91.2501 84.0384 89.6086 83.5205 88.0148L84.0942 87.9112C84.0942 87.9112 84.5006 89.0428 84.6441 90.7162C84.668 90.9871 84.6759 91.2342 84.6759 91.4732L85.1859 91.4414L88.6045 91.2501C88.6045 91.2501 88.3495 91.2979 88.3495 91.6804C88.3495 91.8398 88.4452 91.9434 88.5169 92.0071C88.3734 91.9912 88.2141 91.9753 88.0547 91.9832L84.66 92.0709C84.652 92.1665 84.652 92.2621 84.6441 92.3657C84.5644 93.7523 84.2377 95.0831 83.4647 95.5931C86.0306 95.8959 88.3097 96.0473 88.3097 96.0473C87.8634 96.2306 88.0547 96.7725 88.0547 96.7725C86.3255 96.3023 82.1339 96.0553 82.1339 96.0553C80.3648 95.9039 80.1258 97.0992 80.1258 97.0992C79.7991 98.5415 81.3689 99.2029 81.3689 99.2029C81.5761 99.3225 83.4487 99.697 84.7875 99.952L86.1262 100.199L86.5008 100.271C86.4609 100.263 86.3016 100.255 86.2378 100.518C86.2059 100.645 86.2378 100.733 86.2617 100.789C86.0625 100.701 85.8234 100.621 85.5445 100.566C84.915 100.438 83.0105 100.127 82.867 100.103L82.3889 100.04C80.8111 99.8325 80.4286 100.111 80.4286 100.111C79.552 100.574 79.807 101.689 79.807 101.689C79.9983 102.765 81.1856 103.1 81.1856 103.1C81.6398 103.235 84.0464 103.817 84.0464 103.817L80.4047 103.339C80.1497 103.259 80.0541 103.139 79.9106 103.028C78.6277 101.976 79.1695 100.55 79.1695 100.55C79.3687 99.9998 79.7831 99.7528 79.7831 99.7528C80.0302 99.6014 80.317 99.5217 80.6119 99.4898C79.1217 98.7009 79.3608 97.1071 79.3608 97.1071C79.552 96.127 80.2612 95.7126 80.8191 95.5373C80.7712 95.4975 80.7155 95.4576 80.6677 95.4098C80.6677 95.4098 79.7114 94.7803 80.062 92.0789C80.1816 91.1704 80.1656 91.0429 80.07 90.4692C80.07 90.4692 79.7273 89.242 78.7073 89.6325C78.7073 89.6325 78.3647 89.7201 77.8308 90.1425C77.8308 90.1425 77.4005 90.4771 77.4084 89.9512C77.4084 89.7918 77.52 89.505 77.7352 89.2579C77.7352 89.2579 77.9583 88.995 78.5081 88.8436C78.5081 88.8436 79.9345 88.2778 80.6437 89.7042C81.0183 90.4532 80.9466 90.9473 80.827 91.7123C80.827 91.7123 80.6039 94.1268 81.2334 94.8998C81.2334 94.8998 81.855 95.609 82.8511 95.1707C82.8591 95.1867 84.2137 94.4456 84.0066 91.2501Z" fill="#C48E6A"/>
      </g>
      <defs>
      <clipPath id="clip0_151_1231">
      <rect width="102" height="102" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `
    },
    {
      title: "Self-Paced learning",
      description: "Explore your career tech with our Detailed courses from beginner to advanced levels.",
      li1: "Explore your career tech with Our self-paced programs that allows you to study whenever and wherever it suits you.",
      li2: "Explore your career tech with Our self-paced programs and experience Hands-on projects to build a strong portfolio.",
      li3: "",
      icon: `<svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M92.5 83.25C97.5875 83.25 101.75 79.0875 101.75 74V27.75C101.75 22.6625 97.5875 18.5 92.5 18.5H18.5C13.4125 18.5 9.25 22.6625 9.25 27.75V74C9.25 79.0875 13.4125 83.25 18.5 83.25H0V92.5H111V83.25H92.5ZM18.5 27.75H92.5V74H18.5V27.75Z" fill="white"/>
      <path d="M65.7612 51.1916C66.3616 51.5109 66.8638 51.9875 67.214 52.5704C67.5642 53.1532 67.7492 53.8204 67.7492 54.5004C67.7492 55.1804 67.5642 55.8475 67.214 56.4304C66.8638 57.0133 66.3616 57.4899 65.7612 57.8091L49.7463 66.5179C47.1675 67.9216 44 66.0966 44 63.2104V45.7916C44 42.9041 47.1675 41.0804 49.7463 42.4816L65.7612 51.1916Z" fill="white"/>
      </svg>
      
      `
    },
    {
      title: "Remote Internships",
      description: "Work on real-world projects to Gain hands-on experience that prepares you for future job roles.",
      li1: "Receive personalized mentorship from our experienced professionals.",
      li2: "Strengthen your resume with relevant work experience.",
      li3: "",
      icon: `<svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.25 5.875C32.5232 5.875 29.9082 6.9582 27.9801 8.88631C26.052 10.8144 24.9688 13.4295 24.9688 16.1562V23.5H17.625C14.5087 23.5 11.52 24.7379 9.3165 26.9415C7.11294 29.145 5.875 32.1337 5.875 35.25V76.375C5.875 79.4913 7.11294 82.4799 9.3165 84.6835C11.52 86.8871 14.5087 88.125 17.625 88.125H76.375C79.4913 88.125 82.4799 86.8871 84.6835 84.6835C86.8871 82.4799 88.125 79.4913 88.125 76.375V35.25C88.125 32.1337 86.8871 29.145 84.6835 26.9415C82.4799 24.7379 79.4913 23.5 76.375 23.5H69.0312V16.1562C69.0312 13.4295 67.9481 10.8144 66.0199 8.88631C64.0918 6.9582 61.4768 5.875 58.75 5.875H35.25ZM60.2188 23.5V16.1562C60.2188 15.7667 60.064 15.3931 59.7886 15.1177C59.5131 14.8422 59.1395 14.6875 58.75 14.6875H35.25C34.8605 14.6875 34.4869 14.8422 34.2114 15.1177C33.936 15.3931 33.7812 15.7667 33.7812 16.1562V23.5H60.2188ZM17.625 32.3125H76.375C77.1541 32.3125 77.9012 32.622 78.4521 33.1729C79.003 33.7238 79.3125 34.4709 79.3125 35.25V41.125H14.6875V35.25C14.6875 34.4709 14.997 33.7238 15.5479 33.1729C16.0988 32.622 16.8459 32.3125 17.625 32.3125ZM14.6875 49.9375V76.375C14.6875 77.1541 14.997 77.9012 15.5479 78.4521C16.0988 79.003 16.8459 79.3125 17.625 79.3125H76.375C77.1541 79.3125 77.9012 79.003 78.4521 78.4521C79.003 77.9012 79.3125 77.1541 79.3125 76.375V49.9375H52.875V58.75H41.125V49.9375H14.6875Z" fill="white"/>
      </svg>
      `
    },
    {
      title: "Upwork Optimization",
      description: "Increase your chances of securing job offers.",
      li1: "Explore Flexible Work Environment.",
      li2: "Set competitive rate and enjoy Higher Earnings Potential",
      li3: "",
      icon: `<svg width="98" height="82" viewBox="0 0 98 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M92.5556 63.1291C91.4204 60.4969 90.1164 57.6405 87.1111 57.6405H84.3889C87.3942 57.6405 89.8333 55.1833 89.8333 52.152V5.48853C89.8348 4.76921 89.6951 4.05664 89.4222 3.39151C89.1494 2.72639 88.7488 2.12174 88.2432 1.61208C87.7376 1.10242 87.1371 0.69774 86.4757 0.421139C85.8144 0.144538 85.1053 0.00143435 84.3889 0H13.6111C10.6058 0 8.16667 2.45727 8.16667 5.48853V52.152C8.16667 55.1833 10.6058 57.6405 13.6111 57.6405H10.8889C7.88356 57.6405 6.35094 60.3848 5.44444 63.1291L0 76.5087C0 79.5427 2.43911 82 5.44444 82H92.5556C95.5609 82 98 79.5427 98 76.5115L92.5556 63.1291Z" fill="white"/>
      <path d="M0 77L0.0163406 77.148L0.479324 78.9455C0.909742 79.8533 1.60484 80.624 2.48175 81.1656C3.35865 81.7072 4.38037 81.9968 5.42508 82H92.5749C93.981 81.9956 95.3309 81.4727 96.342 80.5408C97.3532 79.6089 97.9473 78.3401 98 77H0Z" fill="#E0E0E0"/>
      <path d="M85 49.2356C85 50.7637 83.7793 52 82.2692 52H16.7308C15.2234 52 14 50.7637 14 49.2356V7.76438C14 6.23626 15.2234 5 16.7308 5H82.2692C83.7793 5 85 6.23902 85 7.76438V49.2356Z" fill="#FF9D2B"/>
      <path d="M89.8835 68.2479L87.8125 62.292C87.1612 61.0324 86.0822 60 84.5753 60H14.1412C12.637 60 11.6724 61.1172 10.9912 62.8369L9.11641 68.2507C8.51965 69.8827 10.3372 71 11.8413 71H32.4909C32.4909 71 35.0442 70.8713 35.4965 69.3351C36.0197 67.5606 36.6273 64.888 36.7581 64.417C36.9598 63.694 37.8154 62.9629 39.0907 62.9629H62.4652C63.8276 62.9629 64.498 63.6557 64.6751 64.5128C64.7895 65.0714 65.5253 67.6373 65.8686 69.3926C66.1711 70.9562 69.1958 70.9973 69.1958 70.9973H87.164C88.6654 70.9973 90.4802 69.7075 89.8835 68.2479Z" fill="#E0E0E0"/>
      <path d="M61.5571 74H40.3468C39.3246 74 38.8803 73.0893 39.0275 72.2078C39.1747 71.3289 40.0061 67.4471 40.0715 66.9957C40.1342 66.5417 40.8184 66 41.4999 66H51.061H60.6222C61.4318 66 61.9579 66.4328 62.1214 67.2984C62.2822 68.1666 62.9446 71.6555 62.9964 72.452C63.0482 73.2486 62.5357 74 61.5571 74Z" fill="#E0E0E0"/>
      </svg>
      `
    },
    {
      title: "LinkedIn Optimization",
      description: "Explore Our well-tailored and SEO-friendly LinkedIn Optimization",
      li1: "Increase your chances of securing job offers.",
      li2: "",
      li3: "",
      icon: `<svg width="98" height="82" viewBox="0 0 98 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M92.5556 63.1291C91.4204 60.4969 90.1164 57.6405 87.1111 57.6405H84.3889C87.3942 57.6405 89.8333 55.1833 89.8333 52.152V5.48853C89.8348 4.76921 89.6951 4.05664 89.4222 3.39151C89.1494 2.72639 88.7488 2.12174 88.2432 1.61208C87.7376 1.10242 87.1371 0.69774 86.4757 0.421139C85.8144 0.144538 85.1053 0.00143435 84.3889 0H13.6111C10.6058 0 8.16667 2.45727 8.16667 5.48853V52.152C8.16667 55.1833 10.6058 57.6405 13.6111 57.6405H10.8889C7.88356 57.6405 6.35094 60.3848 5.44444 63.1291L0 76.5087C0 79.5427 2.43911 82 5.44444 82H92.5556C95.5609 82 98 79.5427 98 76.5115L92.5556 63.1291Z" fill="white"/>
      <path d="M0 77L0.0163406 77.148L0.479324 78.9455C0.909742 79.8533 1.60484 80.624 2.48175 81.1656C3.35865 81.7072 4.38037 81.9968 5.42508 82H92.5749C93.981 81.9956 95.3309 81.4727 96.342 80.5408C97.3532 79.6089 97.9473 78.3401 98 77H0Z" fill="#E0E0E0"/>
      <path d="M85 49.2356C85 50.7637 83.7793 52 82.2692 52H16.7308C15.2234 52 14 50.7637 14 49.2356V7.76438C14 6.23626 15.2234 5 16.7308 5H82.2692C83.7793 5 85 6.23902 85 7.76438V49.2356Z" fill="#fff"/>
      <path d="M89.8835 68.2479L87.8125 62.292C87.1612 61.0324 86.0822 60 84.5753 60H14.1412C12.637 60 11.6724 61.1172 10.9912 62.8369L9.11641 68.2507C8.51965 69.8827 10.3372 71 11.8413 71H32.4909C32.4909 71 35.0442 70.8713 35.4965 69.3351C36.0197 67.5606 36.6273 64.888 36.7581 64.417C36.9598 63.694 37.8154 62.9629 39.0907 62.9629H62.4652C63.8276 62.9629 64.498 63.6557 64.6751 64.5128C64.7895 65.0714 65.5253 67.6373 65.8686 69.3926C66.1711 70.9562 69.1958 70.9973 69.1958 70.9973H87.164C88.6654 70.9973 90.4802 69.7075 89.8835 68.2479Z" fill="#E0E0E0"/>
      <path d="M61.5571 74H40.3468C39.3246 74 38.8803 73.0893 39.0275 72.2078C39.1747 71.3289 40.0061 67.4471 40.0715 66.9957C40.1342 66.5417 40.8184 66 41.4999 66H51.061H60.6222C61.4318 66 61.9579 66.4328 62.1214 67.2984C62.2822 68.1666 62.9446 71.6555 62.9964 72.452C63.0482 73.2486 62.5357 74 61.5571 74Z" fill="#E0E0E0"/>
      </svg>
      `

    },
    {
      title: "CV Review",
      description: "Explore our one-on-one and ATS-friendly CV optimization service",
      li1: "Stand Out to Recruiters After well-crafted CV session.",
      li2: "",
      li3: "",
      icon: `<svg width="71" height="92" viewBox="0 0 71 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.7501 58.3214C17.0776 58.3214 16.4326 58.0543 15.957 57.5787C15.4815 57.1032 15.2144 56.4582 15.2144 55.7857C15.2144 55.1132 15.4815 54.4682 15.957 53.9927C16.4326 53.5172 17.0776 53.25 17.7501 53.25H53.2501C53.9226 53.25 54.5676 53.5172 55.0431 53.9927C55.5186 54.4682 55.7858 55.1132 55.7858 55.7857C55.7858 56.4582 55.5186 57.1032 55.0431 57.5787C54.5676 58.0543 53.9226 58.3214 53.2501 58.3214H17.7501ZM17.7501 71C17.0776 71 16.4326 70.7328 15.957 70.2573C15.4815 69.7818 15.2144 69.1368 15.2144 68.4643C15.2144 67.7918 15.4815 67.1468 15.957 66.6713C16.4326 66.1957 17.0776 65.9286 17.7501 65.9286H53.2501C53.9226 65.9286 54.5676 66.1957 55.0431 66.6713C55.5186 67.1468 55.7858 67.7918 55.7858 68.4643C55.7858 69.1368 55.5186 69.7818 55.0431 70.2573C54.5676 70.7328 53.9226 71 53.2501 71H17.7501Z" fill="white"/>
      <path d="M26.0368 26.0316C26.761 26.0538 27.4823 25.9303 28.1579 25.6685C28.8335 25.4066 29.4496 25.0118 29.9698 24.5074C30.4899 24.0029 30.9034 23.3992 31.1858 22.7319C31.4682 22.0647 31.6137 21.3475 31.6137 20.6229C31.6137 19.8984 31.4682 19.1812 31.1858 18.514C30.9034 17.8467 30.4899 17.243 29.9698 16.7385C29.4496 16.2341 28.8335 15.8392 28.1579 15.5774C27.4823 15.3156 26.761 15.1921 26.0368 15.2143C24.631 15.2573 23.2972 15.846 22.318 16.8557C21.3389 17.8653 20.7913 19.2165 20.7913 20.6229C20.7913 22.0294 21.3389 23.3806 22.318 24.3902C23.2972 25.3999 24.631 25.9886 26.0368 26.0316Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5096 7.08691e-07H7.60714C5.5896 7.08691e-07 3.6547 0.801466 2.22808 2.22808C0.801465 3.6547 0 5.5896 0 7.60714V83.6786C0 85.6961 0.801465 87.631 2.22808 89.0576C3.6547 90.4843 5.5896 91.2857 7.60714 91.2857H63.3929C65.4104 91.2857 67.3453 90.4843 68.7719 89.0576C70.1985 87.631 71 85.6961 71 83.6786V31.453C70.9995 29.5485 70.2847 27.7135 68.9968 26.3106L47.1186 2.46471C46.4057 1.68749 45.5388 1.06703 44.5732 0.642726C43.6076 0.21842 42.5644 -0.000454533 41.5096 7.08691e-07ZM5.07143 7.60714C5.07143 6.93463 5.33858 6.28966 5.81412 5.81412C6.28966 5.33858 6.93463 5.07143 7.60714 5.07143H41.5096C41.8615 5.07104 42.2096 5.14389 42.5318 5.28533C42.8539 5.42677 43.1431 5.63372 43.381 5.893L65.2591 29.7389C65.6891 30.2063 65.9279 30.818 65.9286 31.453V83.6786C65.9286 84.3511 65.6614 84.9961 65.1859 85.4716C64.7103 85.9471 64.0654 86.2143 63.3929 86.2143H7.60714C6.93463 86.2143 6.28966 85.9471 5.81412 85.4716C5.33858 84.9961 5.07143 84.3511 5.07143 83.6786V7.60714Z" fill="white"/>
      <path d="M43.1072 5.57858V29.4143H66.9429" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8491 37.7516C36.8491 32.0007 32.0059 27.837 26.0317 27.837C20.0576 27.837 15.2144 31.9956 15.2144 37.7516V40.4598C15.2157 40.9377 15.4065 41.3957 15.7449 41.7331C16.0834 42.0706 16.5418 42.2602 17.0198 42.2601H35.0487C35.5258 42.2588 35.9829 42.0687 36.3203 41.7314C36.6576 41.394 36.8477 40.9369 36.8491 40.4598V37.7516Z" fill="white"/>
      </svg>
      
      `
    },
    {
      title: "Interview preparation",
      description: "Explore our personalized Interview Preparation.",
      li1: "Stand the chance to be mentored by our industry experts.",
      li2: "Stand the chance to get hired after our interview preparation with you.",
      li3: "",
      icon: `<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5556 48.8889C30.5556 54.2911 26.18 58.6666 20.7778 58.6666C15.3756 58.6666 11 54.2911 11 48.8889C11 43.4866 15.3756 39.1111 20.7778 39.1111C26.18 39.1111 30.5556 43.4866 30.5556 48.8889Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7778 53.7778C22.0744 53.7778 23.3179 53.2627 24.2347 52.3458C25.1516 51.429 25.6667 50.1855 25.6667 48.8889C25.6667 47.5922 25.1516 46.3487 24.2347 45.4319C23.3179 44.5151 22.0744 44 20.7778 44C19.4812 44 18.2377 44.5151 17.3208 45.4319C16.404 46.3487 15.8889 47.5922 15.8889 48.8889C15.8889 50.1855 16.404 51.429 17.3208 52.3458C18.2377 53.2627 19.4812 53.7778 20.7778 53.7778ZM20.7778 58.6666C26.18 58.6666 30.5556 54.2911 30.5556 48.8889C30.5556 43.4866 26.18 39.1111 20.7778 39.1111C15.3756 39.1111 11 43.4866 11 48.8889C11 54.2911 15.3756 58.6666 20.7778 58.6666Z" fill="white"/>
      <path d="M0 74.668C0 67.276 13.8429 63.5555 20.7778 63.5555C27.7127 63.5555 41.5556 67.2784 41.5556 74.6655V88H0V74.668Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70533 73.2918C4.93289 74.0544 4.88889 74.492 4.88889 74.668V83.1111H36.6667V74.6655C36.6667 74.4944 36.6227 74.0544 35.8502 73.2918C35.0338 72.4875 33.6869 71.6247 31.8413 70.8351C28.1258 69.2438 23.5889 68.4444 20.7778 68.4444C17.9667 68.4444 13.4273 69.2438 9.71422 70.8351C7.86867 71.6247 6.52178 72.4875 5.70533 73.2918ZM20.7778 63.5555C13.8429 63.5555 0 67.2784 0 74.6655V88H41.5556V74.6655C41.5556 67.2809 27.7127 63.5555 20.7778 63.5555Z" fill="white"/>
      <path d="M77 48.8889C77 54.2911 72.6245 58.6666 67.2222 58.6666C61.82 58.6666 57.4445 54.2911 57.4445 48.8889C57.4445 43.4866 61.82 39.1111 67.2222 39.1111C72.6245 39.1111 77 43.4866 77 48.8889Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M67.2222 53.7778C68.5188 53.7778 69.7624 53.2627 70.6792 52.3458C71.5961 51.429 72.1111 50.1855 72.1111 48.8889C72.1111 47.5922 71.5961 46.3487 70.6792 45.4319C69.7624 44.5151 68.5188 44 67.2222 44C65.9256 44 64.6821 44.5151 63.7653 45.4319C62.8484 46.3487 62.3333 47.5922 62.3333 48.8889C62.3333 50.1855 62.8484 51.429 63.7653 52.3458C64.6821 53.2627 65.9256 53.7778 67.2222 53.7778ZM67.2222 58.6666C72.6245 58.6666 77 54.2911 77 48.8889C77 43.4866 72.6245 39.1111 67.2222 39.1111C61.82 39.1111 57.4445 43.4866 57.4445 48.8889C57.4445 54.2911 61.82 58.6666 67.2222 58.6666Z" fill="white"/>
      <path d="M53.7777 44C53.7777 49.4022 49.4022 53.7778 43.9999 53.7778C38.5977 53.7778 34.2222 49.4022 34.2222 44C34.2222 38.5978 38.5977 34.2222 43.9999 34.2222C49.4022 34.2222 53.7777 38.5978 53.7777 44Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M43.9999 48.8889C45.2966 48.8889 46.5401 48.3738 47.4569 47.457C48.3738 46.5401 48.8888 45.2966 48.8888 44C48.8888 42.7034 48.3738 41.4599 47.4569 40.543C46.5401 39.6262 45.2966 39.1111 43.9999 39.1111C42.7033 39.1111 41.4598 39.6262 40.543 40.543C39.6261 41.4599 39.1111 42.7034 39.1111 44C39.1111 45.2966 39.6261 46.5401 40.543 47.457C41.4598 48.3738 42.7033 48.8889 43.9999 48.8889ZM43.9999 53.7778C49.4022 53.7778 53.7777 49.4022 53.7777 44C53.7777 38.5978 49.4022 34.2222 43.9999 34.2222C38.5977 34.2222 34.2222 38.5978 34.2222 44C34.2222 49.4022 38.5977 53.7778 43.9999 53.7778Z" fill="white"/>
      <path d="M41.5555 16.7029C41.5555 13.5696 40.3108 10.5647 38.0953 8.34913C35.8797 6.13357 32.8748 4.88889 29.7415 4.88889H21.9951C18.7897 4.88373 15.7108 6.13844 13.422 8.38249C11.1333 10.6265 9.81811 13.6802 9.76006 16.885C9.70202 20.0898 10.9057 23.189 13.1117 25.5145C15.3177 27.8399 18.3492 29.2053 21.5526 29.3162L21.9999 29.3333V34.2222C21.9999 34.2222 41.5555 31.3696 41.5555 16.7029ZM48.8888 12.7991C48.8888 9.40458 50.2373 6.14907 52.6376 3.74877C55.0379 1.34847 58.2934 0 61.6879 0H75.7777C79.0192 0 82.128 1.28769 84.4201 3.57981C86.7122 5.87192 87.9999 8.98069 87.9999 12.2222C87.9999 15.4638 86.7122 18.5725 84.4201 20.8646C82.128 23.1567 79.0192 24.4444 75.7777 24.4444H70.8888V31.7778C70.8888 31.7778 48.8888 28.688 48.8888 12.7991ZM46.4444 74.668C46.4444 67.276 60.2873 63.5556 67.2222 63.5556C74.1571 63.5556 87.9999 67.2784 87.9999 74.6656V88H46.4444V74.668Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1497 73.2918C51.3773 74.0545 51.3333 74.492 51.3333 74.668V83.1111H83.1111V74.6656C83.1111 74.4945 83.0671 74.0545 82.2946 73.2918C81.4782 72.4876 80.1313 71.6247 78.2857 70.8351C74.5702 69.2438 70.0333 68.4445 67.2222 68.4445C64.4111 68.4445 59.8717 69.2438 56.1586 70.8351C54.3131 71.6247 52.9662 72.4876 52.1497 73.2918ZM67.2222 63.5556C60.2873 63.5556 46.4444 67.2785 46.4444 74.6656V88H88V74.6656C88 67.2809 74.1571 63.5556 67.2222 63.5556ZM44 69.7767C44 65.6773 39.4851 62.7049 34.21 60.8716C37.271 59.4243 40.614 58.6714 44 58.6667C47.3859 58.6714 50.7289 59.4243 53.79 60.8716C48.5148 62.7049 44 65.6773 44 69.7767Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M44 69.7767C44 67.5938 45.2808 65.7287 47.2755 64.1862L47.6202 63.9296C49.324 62.6927 51.4824 61.6733 53.79 60.874C51.5003 59.7947 49.0496 59.097 46.5348 58.8085C44.8502 58.6194 43.1497 58.6194 41.4651 58.8085C38.9504 59.0962 36.4997 59.7931 34.21 60.8716C36.5151 61.6733 38.676 62.6927 40.3773 63.9271C40.4946 64.0119 40.6095 64.0982 40.722 64.1862C42.7191 65.7262 44 67.5938 44 69.7767Z" fill="white"/>
      </svg>
      `
    },
    {
      title: "Referrals & Recommendation Letter",
      description: "Explore our Referrals and recommendation letters that will provide credible endorsements.",
      li1: "Be set apart from other candidates with our Referrals and recommendation letter.",
      li2: "",
      li3: "",
      icon: `<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.4444 7.33337V14.6667H17.1111V19.5556H24.4444V26.8889H29.3333V19.5556H36.6666V14.6667H29.3333V7.33337H24.4444Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1111 0C15.1662 0 13.3009 0.772617 11.9257 2.14788C10.5504 3.52315 9.77778 5.38841 9.77778 7.33333V9.77778H0V56.2222H53.7778V9.77778H44V7.33333C44 5.38841 43.2274 3.52315 41.8521 2.14788C40.4768 0.772617 38.6116 0 36.6667 0H17.1111ZM36.6667 34.2222C38.6116 34.2222 40.4768 33.4496 41.8521 32.0743C43.2274 30.6991 44 28.8338 44 26.8889V24.4444H48.8889V51.3333H36.6667V36.6667H17.1111V51.3333H4.88889V24.4444H9.77778V26.8889C9.77778 28.8338 10.5504 30.6991 11.9257 32.0743C13.3009 33.4496 15.1662 34.2222 17.1111 34.2222H36.6667ZM14.6667 7.33333C14.6667 6.68503 14.9242 6.06327 15.3826 5.60485C15.8411 5.14643 16.4628 4.88889 17.1111 4.88889H36.6667C37.315 4.88889 37.9367 5.14643 38.3952 5.60485C38.8536 6.06327 39.1111 6.68503 39.1111 7.33333V26.8889C39.1111 27.5372 38.8536 28.159 38.3952 28.6174C37.9367 29.0758 37.315 29.3333 36.6667 29.3333H17.1111C16.4628 29.3333 15.8411 29.0758 15.3826 28.6174C14.9242 28.159 14.6667 27.5372 14.6667 26.8889V7.33333ZM4.88889 14.6667H9.77778V19.5556H4.88889V14.6667ZM48.8889 19.5556H44V14.6667H48.8889V19.5556ZM31.7778 41.5556V51.3333H22V41.5556H31.7778ZM58.6667 53.7778C58.6667 51.1845 59.6968 48.6975 61.5305 46.8638C63.3642 45.0302 65.8512 44 68.4444 44C71.0377 44 73.5247 45.0302 75.3584 46.8638C77.1921 48.6975 78.2222 51.1845 78.2222 53.7778C78.2222 56.371 77.1921 58.858 75.3584 60.6917C73.5247 62.5254 71.0377 63.5556 68.4444 63.5556C65.8512 63.5556 63.3642 62.5254 61.5305 60.6917C59.6968 58.858 58.6667 56.371 58.6667 53.7778ZM68.4444 48.8889C67.1478 48.8889 65.9043 49.404 64.9875 50.3208C64.0706 51.2377 63.5556 52.4812 63.5556 53.7778C63.5556 55.0744 64.0706 56.3179 64.9875 57.2347C65.9043 58.1516 67.1478 58.6667 68.4444 58.6667C69.7411 58.6667 70.9846 58.1516 71.9014 57.2347C72.8183 56.3179 73.3333 55.0744 73.3333 53.7778C73.3333 52.4812 72.8183 51.2377 71.9014 50.3208C70.9846 49.404 69.7411 48.8889 68.4444 48.8889ZM68.4444 66C61.9178 66 48.8889 69.5738 48.8889 76.6675V83.1111H26.8889C25.1069 83.1111 23.9507 82.4682 23.2149 81.6395C22.44 80.7669 22 79.5349 22 78.2222V69.4564L30.0496 77.506L33.506 74.0496L19.5556 60.0991L5.60511 74.0496L9.06155 77.506L17.1111 69.4564V78.2222C17.1111 80.5762 17.8933 83.0109 19.5629 84.8882C21.2716 86.8096 23.782 88 26.8889 88H88V76.6675C88 69.5738 74.9711 66 68.4444 66ZM54.4964 75.4527C53.8047 76.1493 53.7778 76.5307 53.7778 76.6675V83.1111H83.1111V76.6675C83.1111 76.5307 83.0867 76.1493 82.3924 75.4527C81.6591 74.712 80.4247 73.9029 78.7111 73.1549C75.2596 71.6418 71.0356 70.8889 68.4444 70.8889C65.8533 70.8889 61.6293 71.6467 58.1778 73.1524C56.4642 73.9004 55.2322 74.712 54.4964 75.4527Z" fill="white"/>
      </svg>
      
      `
    },
    {
      title: "Post training support",
      description: "",
      li1: "",
      li2: "",
      li3: "",
      icon: `<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M53.2282 50.4001C51.898 48.2943 51.2106 45.8465 51.2501 43.3562C51.2896 40.8659 52.0543 38.4411 53.4507 36.3786C54.8471 34.316 56.8146 32.7052 59.1124 31.7433C61.4102 30.7813 63.9386 30.51 66.3882 30.9623C68.8379 31.4147 71.1025 32.5713 72.9049 34.2905C74.7074 36.0097 75.9695 38.2169 76.5368 40.6421C77.1041 43.0672 76.952 45.6052 76.0991 47.9453C75.2462 50.2853 73.7295 52.3261 71.7346 53.8178C77.9615 57.2509 82 63.8455 82 71.7365V79.4226C82 80.1021 81.73 80.7538 81.2495 81.2342C80.7689 81.7147 80.1171 81.9846 79.4375 81.9846C78.7579 81.9846 78.1061 81.7147 77.6255 81.2342C77.145 80.7538 76.875 80.1021 76.875 79.4226V71.7365C76.875 62.9027 70.3355 56.3644 61.5 56.3644C56.8363 56.3644 54.8477 56.262 52.2494 55.7393C45.8431 54.4378 40.2928 50.6153 33.8763 42.591C33.6472 42.3309 33.4732 42.0269 33.365 41.6976C33.2568 41.3683 33.2166 41.0205 33.2467 40.6752C33.2769 40.3299 33.3768 39.9943 33.5404 39.6887C33.7041 39.3831 33.928 39.1139 34.1987 38.8974C34.4694 38.6808 34.7813 38.5215 35.1154 38.4289C35.4495 38.3364 35.7989 38.3126 36.1425 38.359C36.486 38.4054 36.8166 38.521 37.1142 38.6988C37.4118 38.8767 37.6702 39.113 37.8737 39.3936C42.4862 45.153 46.3454 48.3094 50.348 49.862C51.1424 50.1285 52.1161 50.2873 53.2282 50.4001ZM62.3764 51.0559C62.8035 51.1072 63.2323 51.1652 63.6628 51.2301L64.0625 51.2404C66.0276 51.236 67.9164 50.4794 69.341 49.126C70.7655 47.7726 71.6175 45.9252 71.7221 43.9632C71.8266 42.0013 71.1757 40.0738 69.903 38.5767C68.6304 37.0796 66.8327 36.1267 64.8791 35.9136C62.9256 35.7006 60.9647 36.2435 59.3991 37.431C57.8335 38.6185 56.7823 40.3604 56.4612 42.2987C56.1402 44.2371 56.5738 46.2247 57.6729 47.8534C58.7721 49.4821 60.4584 50.628 62.3764 51.0559ZM50.1225 61.3348C50.8021 61.3348 51.4539 61.6047 51.9345 62.0851C52.415 62.5656 52.685 63.2173 52.685 63.8968C52.6467 64.3001 52.5607 64.6974 52.4287 65.0804C51.5114 67.0276 51.25 69.0464 51.25 71.7519V79.438C51.25 80.1175 50.98 80.7691 50.4995 81.2496C50.0189 81.7301 49.3671 82 48.6875 82C48.0079 82 47.3561 81.7301 46.8755 81.2496C46.395 80.7691 46.125 80.1175 46.125 79.438V71.7519C46.125 68.3854 46.494 65.6748 47.6984 63.0616C47.8723 62.5572 48.1994 62.1197 48.634 61.8102C49.0685 61.5006 49.5889 61.3344 50.1225 61.3348ZM30.5348 29.576C30.9346 30.1081 31.1116 30.7751 31.0283 31.4355C30.945 32.0959 30.6079 32.6979 30.0883 33.1141C29.5688 33.5304 28.9076 33.7281 28.2448 33.6654C27.582 33.6028 26.9696 33.2847 26.5373 32.7785L15.9387 19.5328C15.7097 19.2727 15.5357 18.9688 15.4275 18.6395C15.3193 18.3101 15.2791 17.9623 15.3092 17.617C15.3394 17.2717 15.4393 16.9361 15.6029 16.6305C15.7666 16.3249 15.9905 16.0557 16.2612 15.8392C16.5319 15.6227 16.8438 15.4633 17.1779 15.3708C17.512 15.2782 17.8614 15.2544 18.205 15.3008C18.5485 15.3472 18.8791 15.4628 19.1767 15.6407C19.4743 15.8185 19.7327 16.0549 19.9363 16.3354L30.5348 29.576ZM5.125 56.3644H33.3125C33.9921 56.3644 34.6439 56.6344 35.1245 57.1148C35.605 57.5953 35.875 58.247 35.875 58.9264C35.875 59.6059 35.605 60.2576 35.1245 60.7381C34.6439 61.2185 33.9921 61.4885 33.3125 61.4885H2.5625C1.88288 61.4885 1.2311 61.2185 0.750539 60.7381C0.269977 60.2576 0 59.6059 0 58.9264V2.56202C0 1.88253 0.269977 1.23087 0.750539 0.750398C1.2311 0.269926 1.88288 0 2.5625 0L64.0625 0C64.7421 0 65.3939 0.269926 65.8745 0.750398C66.355 1.23087 66.625 1.88253 66.625 2.56202V17.9341C66.625 18.6136 66.355 19.2653 65.8745 19.7458C65.3939 20.2262 64.7421 20.4962 64.0625 20.4962C63.3829 20.4962 62.7311 20.2262 62.2505 19.7458C61.77 19.2653 61.5 18.6136 61.5 17.9341V5.12404H5.125V56.3644Z" fill="white"/>
      </svg>
      `
    },
  ]
  return (
    <div className='w-[90%] mx-auto mt-28'>
      <h2 className='text-[#3AA619] font-semibold text-3xl'>Explore Our Offerings</h2>
      <div className='flex justify-between sm:hidden mt-6 hidden'>
        <p className='w-[70%] font-normal text-[#59595A]'>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
        <button className='h-[60px] bg-[#fff] px-5 rounded-lg text-[#262626]'>View All</button>
      </div>
      <div className='flex justify-between flex-wrap mt-10'>
        {Benefits.map((item, idx) => {
          const {title, description, li1, li2,li3,icon} = item
          return (
            <div className='flex flex-col bg-[#3AA619] mb-8 w-[40vw] sm:w-[90%] mx-auto rounded-xl p-8' key={idx}>
             <div className='flex justify-between'>
      <h2 dangerouslySetInnerHTML={{ __html: icon }} />
             <h2 className='font-bold text-[#fff] ml-auto w-fit text-7xl'>0{idx+1}</h2>
             </div>
              <h2 className='text-[#fff] font-semibold text-2xl mt-6'>{title}</h2>
          
              <ul className='list-disc ml-4'>
               {description && <li className='text-[#fff] font-normal mt-3 text-lg'>{description}</li>}
                {li1 && <li className='text-[#fff] font-normal mt-3 text-lg'>{li1}</li>}
                {li2 &&  <li className='text-[#fff] font-normal mt-3 text-lg'>{li2}</li>}
                {li3 &&  <li className='text-[#fff] font-normal mt-3 text-lg'>{li3}</li>}
              </ul>
              <div className='w-[50px] mt-auto ml-auto h-[50px] rounded-lg bg-[#FCFCFD] flex justify-center items-center'>
              <MdArrowOutward color='#FFC480' size={23} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Benefit