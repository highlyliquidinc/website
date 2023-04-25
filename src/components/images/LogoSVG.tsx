import { FC } from 'react'

const LogoSVG: FC<{ size: number }> = ({ size, ...props }) => (
  <svg
    width={size}
    height={size / 3}
    viewBox="0 0 151 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_74_195)">
      <path
        d="M16.3846 29.9393C15.2217 32.7904 14.0418 35.636 12.9126 38.5014C12.6383 39.1979 12.2476 39.4566 11.5197 39.4448C9.27629 39.4097 7.03113 39.4322 4.78686 39.4313C4.63949 39.4313 4.49212 39.4268 4.34475 39.4178C4.00119 39.3953 3.86358 39.2151 3.97011 38.8772C4.04202 38.6492 4.13169 38.4266 4.21869 38.2041C4.90759 36.4505 5.56987 34.6853 6.3005 32.9498C6.58902 32.265 6.49226 31.7902 5.96847 31.2837C5.26803 30.6052 4.63594 29.8546 3.93372 29.0914C4.28261 28.8022 4.55959 28.8815 4.81349 28.8815C8.44623 28.8779 12.0781 28.8806 15.7108 28.8869C16.7779 28.8887 16.7974 28.9292 16.3846 29.9393Z"
        fill="#FF577F"
      />
      <path
        d="M26.4767 46.476C25.9769 47.6302 25.4407 48.7692 24.9835 49.9406C24.7048 50.6543 24.2946 50.9363 23.5196 50.9291C19.7635 50.8931 16.0073 50.9129 12.2503 50.9129V50.9219C8.58294 50.9219 4.91558 50.9219 1.24823 50.921C1.01119 50.921 0.774159 50.9318 0.538014 50.9147C0.000915757 50.875 -0.0887485 50.757 0.0728248 50.2335C0.195336 49.8334 0.360461 49.4459 0.513156 49.0558C1.43022 46.7129 2.36592 44.3764 3.25635 42.0228C3.50315 41.3713 3.85559 41.083 4.5658 41.0938C6.84292 41.1289 9.12093 41.1064 11.398 41.1064C11.4868 41.1064 11.5765 41.1037 11.6644 41.1109C12.2139 41.1578 12.3045 41.2686 12.1171 41.784C11.8916 42.4022 11.6138 43.0014 11.3767 43.6159C10.7544 45.228 10.3185 45.4595 12.5184 45.3893C16.9244 45.2487 21.3313 45.3073 25.7372 45.2847C26.9757 45.2784 26.9845 45.3019 26.4767 46.476Z"
        fill="#FF577F"
      />
      <path
        d="M39.2019 41.8039C38.0887 44.5792 36.9559 47.3482 35.8444 50.1245C35.6624 50.5786 35.3712 50.7723 34.8989 50.7669C33.8354 50.7552 32.7719 50.7633 31.7092 50.7633V50.7705C30.6457 50.7705 29.5821 50.7841 28.5195 50.7651C27.9016 50.7543 27.8306 50.648 28.0623 50.0632C29.1515 47.3095 30.2577 44.563 31.3505 41.8102C31.5379 41.3389 31.8406 41.1037 32.3582 41.1064C34.4844 41.1173 36.6106 41.101 38.7376 41.1136C39.368 41.1182 39.4354 41.2227 39.2019 41.8039Z"
        fill="#FF577F"
      />
      <path
        d="M42.4725 32.3506C41.6584 34.3798 40.8168 36.3974 40.032 38.4383C39.7568 39.1529 39.3555 39.4637 38.5814 39.4457C36.6895 39.4025 34.7959 39.4322 32.9032 39.4322C32.8739 39.4322 32.8437 39.4322 32.8145 39.4313C31.8663 39.4106 31.7997 39.3241 32.138 38.4527C32.5384 37.4192 32.9716 36.3992 33.3675 35.3638C34.0351 33.6175 34.1745 33.9996 32.7612 32.6597C32.3981 32.3146 31.995 32.0091 31.6648 31.5522C31.972 31.3342 32.2161 31.3855 32.446 31.3855C35.5807 31.3855 38.7154 31.3882 41.8501 31.3973C42.8187 31.4 42.8391 31.4369 42.4725 32.3506Z"
        fill="#FF577F"
      />
      <path
        d="M65.8269 41.8976C64.7314 44.5873 63.6119 47.2662 62.5244 49.9595C62.2883 50.5434 61.9314 50.7705 61.31 50.7714C60.5128 50.7732 60.4497 50.8976 60.5856 51.6968C60.6513 52.0807 60.7391 52.4609 60.8128 52.8439C61.0286 53.9603 61.0055 53.991 59.8381 53.9973C58.9805 54.0027 58.1229 53.9973 57.2653 53.9973V53.9865C56.2897 53.9865 55.314 53.9991 54.3384 53.982C53.6805 53.9703 53.5935 53.8946 53.4026 53.2548C53.265 52.7962 53.163 52.3267 53.0396 51.8626C52.7546 50.7894 52.7315 50.7651 51.6635 50.7597C50.3621 50.7534 49.0615 50.7597 47.76 50.7597C45.4545 50.7615 43.1481 50.7633 40.8417 50.7633C40.6055 50.7633 40.3685 50.7606 40.1323 50.7435C39.866 50.7246 39.7772 50.5543 39.8314 50.3065C39.8633 50.1614 39.9202 50.0217 39.9725 49.8812C40.9491 47.2725 41.923 44.663 42.9057 42.0571C43.2564 41.128 43.283 41.1109 44.2613 41.1073C46.0644 41.1001 47.8683 41.1055 49.6723 41.1055C49.761 41.1055 49.8498 41.1028 49.9386 41.1091C50.5476 41.1488 50.6328 41.2488 50.4269 41.8183C50.0904 42.7473 49.7113 43.661 49.374 44.59C49.2559 44.9144 48.9265 45.3019 49.1804 45.5893C49.4441 45.8867 49.8374 45.5722 50.1543 45.4577C52.4936 44.6125 54.8257 43.7484 57.1677 42.9113C57.7545 42.7013 58.2454 42.4391 58.4176 41.7723C58.5526 41.2497 58.9325 41.101 59.4324 41.1037C61.3837 41.1145 63.335 41.0983 65.2863 41.1109C66.0196 41.1154 66.0986 41.229 65.8269 41.8967V41.8976Z"
        fill="#FF577F"
      />
      <path
        d="M69.1063 32.447C68.2896 34.4718 67.448 36.4875 66.6561 38.523C66.404 39.1709 66.0471 39.4592 65.3395 39.4448C63.4788 39.4061 61.6171 39.4322 59.7564 39.4313C59.6383 39.4313 59.5202 39.4259 59.4022 39.4214C58.9831 39.4052 58.8997 39.1655 59.0311 38.8141C59.2397 38.2527 59.4652 37.6985 59.68 37.1399C59.7555 36.9443 59.8372 36.7497 59.8913 36.5487C60.0209 36.0667 59.9526 35.9477 59.4892 35.8648C59.2868 35.8288 59.0773 35.8279 58.8713 35.827C56.9804 35.8126 55.0894 35.7972 53.1985 35.7936C52.2415 35.7918 52.2202 35.8135 51.85 36.7497C51.5978 37.3895 51.3368 38.0274 51.1122 38.678C50.932 39.2006 50.6151 39.4403 50.0576 39.4358C48.108 39.4196 46.1585 39.4394 44.2081 39.4259C43.4916 39.4205 43.4242 39.3106 43.6772 38.6221C44.1513 37.3291 44.62 36.0342 45.142 34.761C45.4145 34.0951 45.387 33.5815 44.8135 33.0895C44.3883 32.7246 44.0305 32.2749 43.6621 31.846C43.4686 31.6216 43.5591 31.4495 43.8396 31.4162C44.0731 31.3892 44.3119 31.3982 44.5481 31.3982C48.5066 31.3973 52.4661 31.3973 56.4246 31.3973V31.4162C60.4133 31.4162 64.4021 31.4144 68.3908 31.4171C69.4819 31.418 69.5067 31.4549 69.1063 32.447Z"
        fill="#FF577F"
      />
      <path
        d="M80.5878 32.429C79.8092 34.4682 79.0067 36.4965 78.2458 38.542C78.0177 39.1529 77.6883 39.452 77.0127 39.4412C75.0952 39.4106 73.1767 39.4394 71.2582 39.4268C70.3589 39.4205 70.2924 39.298 70.6235 38.4023C70.904 37.6445 71.1926 36.8912 71.4793 36.137C71.6276 35.745 71.7421 35.3359 71.9338 34.9674C72.3369 34.196 72.2437 33.5797 71.5734 32.9904C71.118 32.5903 70.762 32.074 70.3607 31.6081C70.6546 31.3279 70.9342 31.4234 71.1846 31.4234C74.0769 31.4171 76.9692 31.4216 79.8616 31.4234C79.8909 31.4234 79.9202 31.4225 79.9504 31.4234C80.8683 31.4432 80.9313 31.5315 80.5878 32.429Z"
        fill="#FF577F"
      />
      <path
        d="M92.68 41.9697C91.5987 44.6315 90.4864 47.2788 89.4202 49.946C89.1636 50.5876 88.7588 50.7579 88.1222 50.7534C84.6955 50.7327 81.2678 50.7435 77.8401 50.7435V50.7507C74.4125 50.7507 70.9848 50.7525 67.5572 50.7498C66.4856 50.7489 66.4732 50.7345 66.862 49.7037C67.835 47.1275 68.8311 44.5603 69.7837 41.9769C70.0145 41.3488 70.3625 41.0866 71.0265 41.0974C72.9175 41.1263 74.8084 41.1001 76.6994 41.1091C77.6679 41.1145 77.7212 41.2092 77.3581 42.1688C77.0305 43.0375 76.6923 43.9007 76.3593 44.7666C75.9119 45.929 75.9474 45.9921 77.1486 45.9858C78.9214 45.9768 80.6952 45.9326 82.4672 45.9498C83.2227 45.957 83.6683 45.6884 83.9151 44.9396C84.2525 43.9169 84.6946 42.9311 85.0594 41.9174C85.2565 41.3705 85.5646 41.0947 86.1674 41.101C88.1471 41.1227 90.1268 41.0983 92.1065 41.1127C92.8709 41.1182 92.9668 41.2623 92.68 41.9697Z"
        fill="#FF577F"
      />
      <path
        d="M96.0021 32.4506C95.164 34.5303 94.2975 36.5983 93.4684 38.6816C93.2455 39.2394 92.8913 39.443 92.3152 39.4376C90.3665 39.4178 88.4179 39.4403 86.4701 39.4259C85.656 39.4196 85.5566 39.2736 85.8442 38.5212C86.6548 36.3983 87.4911 34.2852 88.2998 32.1614C88.4969 31.6442 88.8103 31.4063 89.366 31.4216C90.339 31.4468 91.3138 31.4288 92.2885 31.4288V31.4414C93.3219 31.4414 94.3553 31.4171 95.3877 31.4495C96.2107 31.4748 96.3199 31.6613 96.0021 32.4506Z"
        fill="#FF577F"
      />
      <path
        d="M107.867 32.3948C107.042 34.5105 106.188 36.6154 105.36 38.7303C105.172 39.2106 104.867 39.4331 104.356 39.4313C102.319 39.4214 100.284 39.4385 98.2472 39.4205C97.5725 39.4151 97.4642 39.2403 97.6968 38.5807C98.1327 37.3399 98.5641 36.0955 99.0631 34.88C99.3631 34.1519 99.3436 33.5734 98.7257 33.0382C98.4372 32.7886 98.2099 32.4633 97.9613 32.1668C97.8504 32.0343 97.6719 31.9019 97.7421 31.71C97.8326 31.4604 98.0874 31.5279 98.2827 31.5198C98.6067 31.5063 98.9326 31.5171 99.2566 31.5171H102.887V31.5397C104.362 31.5397 105.838 31.5288 107.312 31.5442C108.085 31.5523 108.156 31.6541 107.867 32.3948Z"
        fill="#FF577F"
      />
      <path
        d="M104.603 41.9985C103.551 44.6675 102.476 47.3275 101.425 49.9974C101.225 50.5038 100.929 50.7534 100.366 50.7471C98.4478 50.7255 96.5294 50.7471 94.6109 50.7372C93.8723 50.7336 93.7933 50.6335 94.0356 49.9658C95.022 47.2383 96.0287 44.5197 97.0159 41.7921C97.1952 41.2965 97.513 41.0974 98.0217 41.1055C99.0249 41.1217 100.028 41.11 101.032 41.11C102.035 41.1091 103.039 41.0929 104.042 41.1145C104.79 41.1307 104.887 41.2785 104.603 41.9985Z"
        fill="#FF577F"
      />
      <path
        d="M131.665 41.8822C131.638 41.9679 131.609 42.0535 131.577 42.1373C131.007 43.7286 130.022 44.991 128.623 45.9245C126.447 47.3725 124.264 48.8089 122.094 50.2668C121.606 50.5957 121.104 50.7453 120.516 50.7399C118.18 50.721 115.845 50.7327 113.509 50.7327V50.739C111.232 50.739 108.955 50.7399 106.678 50.7381C106.442 50.7381 106.204 50.7435 105.969 50.7228C105.633 50.693 105.498 50.4993 105.596 50.1659C105.655 49.9649 105.725 49.7667 105.799 49.5712C106.747 47.0797 107.695 44.5882 108.647 42.0985C109.012 41.1407 109.049 41.1118 110.07 41.1082C111.874 41.1019 113.678 41.0983 115.481 41.1109C116.255 41.1163 116.313 41.2127 116.048 41.9597C115.706 42.9185 115.345 43.8709 114.996 44.8279C114.914 45.0523 114.837 45.2802 114.784 45.5127C114.717 45.8065 114.848 45.9894 115.147 45.9894C116.359 45.9876 117.57 45.9813 118.782 45.9596C119.088 45.9542 119.332 45.7506 119.573 45.5794C120.689 44.79 121.793 43.9827 122.919 43.2086C123.368 42.9005 123.616 42.4824 123.746 41.9778C123.902 41.3713 124.238 41.0902 124.887 41.0992C126.957 41.1253 129.026 41.1001 131.096 41.1109C131.848 41.1145 131.888 41.1902 131.665 41.8822Z"
        fill="#FF577F"
      />
      <path
        d="M134.518 32.7516C133.819 34.6628 133.118 36.5731 132.41 38.4807C132.074 39.3872 132.024 39.425 131.053 39.4286C129.073 39.4376 127.094 39.4322 125.115 39.4322C125.056 39.4322 124.996 39.4331 124.937 39.4295C124.268 39.3935 124.2 39.3088 124.398 38.6798C124.587 38.0806 124.802 37.4895 124.999 36.893C125.065 36.6947 125.125 36.4929 125.162 36.2874C125.207 36.045 125.103 35.8783 124.853 35.836C124.736 35.8153 124.617 35.8063 124.5 35.8063C122.52 35.8063 120.541 35.8189 118.562 35.8026C117.996 35.7981 117.701 36.0631 117.525 36.5794C117.284 37.2867 116.987 37.9761 116.752 38.6852C116.575 39.2205 116.251 39.4403 115.698 39.4358C113.807 39.4187 111.916 39.4403 110.026 39.4241C109.273 39.4178 109.199 39.2889 109.472 38.5464C109.918 37.339 110.364 36.1315 110.85 34.9412C111.07 34.4006 111.007 33.9771 110.631 33.5418C110.221 33.0697 109.849 32.5642 109.479 32.0596C109.282 31.7901 109.382 31.6018 109.705 31.5694C109.968 31.5432 110.236 31.545 110.501 31.545C114.341 31.5432 118.182 31.5441 122.022 31.5441V31.573C125.922 31.573 129.821 31.5712 133.721 31.5739C134.864 31.5748 134.918 31.6568 134.518 32.7516Z"
        fill="#FF577F"
      />
      <path
        d="M143.399 12.1186C142.597 12.6115 141.832 13.1828 140.988 13.5784C139.36 14.3425 138.318 15.5364 137.773 17.28C137.417 18.4181 136.837 19.4814 136.394 20.5942C136.165 21.1691 135.827 21.4358 135.193 21.4277C133.213 21.4007 131.232 21.4295 129.251 21.4178C128.483 21.4133 128.418 21.307 128.689 20.5636C129.304 18.875 129.908 17.1818 130.572 15.513C130.829 14.8633 130.76 14.3939 130.261 13.9073C129.712 13.3721 129.231 12.7656 128.721 12.1907C128.752 12.1232 128.782 12.0556 128.813 11.9889H143.356C143.371 12.0321 143.385 12.0754 143.399 12.1186Z"
        fill="#FF577F"
      />
      <path
        d="M150.848 2.3221C150.237 3.85123 149.607 5.37406 148.997 6.9041C148.834 7.31228 148.579 7.61595 148.208 7.83942C147.062 8.52694 145.918 9.21807 144.782 9.92091C144.388 10.1642 143.973 10.2606 143.517 10.2606C138.696 10.2561 133.876 10.2516 129.055 10.266C128.444 10.2678 127.98 10.0687 127.584 9.60013C127.066 8.98469 126.523 8.38818 125.967 7.80788C125.634 7.46006 125.566 7.11224 125.753 6.66801C126.009 6.06158 126.214 5.43263 126.472 4.8271C126.676 4.34773 126.61 3.97648 126.212 3.62866C125.741 3.21867 125.297 2.77534 124.857 2.33021C124.657 2.12836 124.368 1.98149 124.344 1.62196C124.592 1.38677 124.901 1.47238 125.182 1.47238C128.287 1.46967 131.393 1.47688 134.498 1.48229C134.616 1.48229 134.735 1.47868 134.852 1.4895C135.398 1.53906 135.491 1.6544 135.301 2.16981C135.041 2.87176 134.762 3.56829 134.456 4.25041C134.235 4.7415 134.252 5.14789 134.617 5.57049C135.241 6.29226 135.821 7.05277 136.434 7.78355C136.9 8.33771 136.991 8.36475 137.534 7.97908C138.892 7.01583 140.23 6.02554 141.58 5.05237C141.886 4.83251 142.05 4.52344 142.181 4.18373C142.429 3.54126 142.696 2.9051 142.925 2.25542C143.106 1.7418 143.404 1.48319 143.972 1.4886C146.1 1.50932 148.23 1.4913 150.36 1.50572C151.06 1.51022 151.124 1.63007 150.848 2.3221Z"
        fill="#FF577F"
      />
      <path
        d="M123.627 17.3143C123.182 18.3613 122.694 19.3904 122.291 20.4527C122.017 21.1727 121.589 21.4529 120.825 21.4457C117.515 21.4151 114.205 21.4322 110.895 21.4322V21.4574C107.585 21.4574 104.274 21.461 100.965 21.4556C99.8123 21.4538 99.7555 21.3619 100.163 20.2869C101.087 17.8513 102.012 15.4166 102.938 12.9828C103.33 11.9537 103.354 11.9303 104.407 11.9267C106.269 11.9204 108.131 11.9249 109.992 11.9249C110.141 11.9249 110.288 11.9312 110.436 11.9348C110.85 11.9456 110.952 12.1745 110.817 12.5331C110.532 13.29 110.234 14.0406 109.941 14.7939C109.449 16.0609 109.466 16.0906 110.791 16.0933C114.81 16.1005 118.83 16.1041 122.849 16.1122C124.08 16.1149 124.113 16.1681 123.627 17.3143Z"
        fill="#FF577F"
      />
      <path
        d="M114.395 1.97698C114.346 2.14909 114.274 2.31489 114.209 2.48159C113.318 4.76583 112.407 7.04286 111.545 9.33792C111.3 9.9894 110.956 10.2895 110.245 10.2759C108.327 10.2408 106.408 10.2642 104.488 10.2633C104.341 10.2633 104.193 10.257 104.046 10.2417C103.706 10.2048 103.574 10.0083 103.684 9.68213C103.837 9.22798 104.006 8.78105 104.174 8.33321C104.561 7.29697 104.921 6.24811 105.354 5.23079C105.62 4.60183 105.588 4.11074 105.104 3.60524C104.612 3.09072 104.185 2.51223 103.734 1.95626C103.628 1.8247 103.459 1.69224 103.579 1.4904C103.665 1.34533 103.832 1.35614 103.979 1.35614C104.716 1.35524 105.454 1.35884 106.193 1.35884C107.107 1.35974 108.022 1.35974 108.937 1.35974V1.44354C110.413 1.44354 111.89 1.44174 113.365 1.44445C113.601 1.44445 113.838 1.44895 114.073 1.47238C114.375 1.50211 114.478 1.69044 114.395 1.97698Z"
        fill="#FF577F"
      />
      <path
        d="M98.7967 13.0044C97.8282 15.5202 96.833 18.0243 95.8866 20.5483C95.6381 21.2097 95.2652 21.4782 94.5692 21.4755C92.6481 21.4683 90.727 21.516 88.8058 21.5413C88.6283 21.544 88.4498 21.5494 88.2732 21.5395C87.6358 21.5016 87.539 21.3746 87.776 20.7555C88.3975 19.1327 89.0411 17.5206 89.6741 15.9023C90.0268 15 89.7164 14.5486 88.7428 14.548C87.0276 14.5498 85.3125 14.5822 83.5982 14.5462C82.8658 14.5308 82.4734 14.8057 82.208 15.4995C81.5439 17.2332 80.792 18.9317 80.1208 20.6627C79.866 21.3187 79.487 21.5773 78.7883 21.5647C76.837 21.5286 74.8857 21.562 72.9335 21.5521C72.2552 21.5494 72.1966 21.462 72.4434 20.8186C73.4839 18.1063 74.5528 15.4049 75.5746 12.6863C75.8116 12.0556 76.2138 11.9177 76.8032 11.9195C80.2034 11.9321 83.6035 11.9249 87.0037 11.924H97.7367C97.8548 11.924 97.9729 11.924 98.0919 11.9249C99.1341 11.9393 99.1829 12.0015 98.7967 13.0044Z"
        fill="#FF577F"
      />
      <path
        d="M72.526 8.74629C72.4479 9.71049 71.8877 10.2625 70.936 10.2643C67.7205 10.2697 64.505 10.267 61.2887 10.2661C61.1413 10.2661 60.9921 10.2724 60.8465 10.2535C60.4204 10.1993 60.3601 10.0965 60.503 9.65637C60.5678 9.45704 60.6725 9.27213 60.7347 9.0728C60.9025 8.53253 61.262 8.34402 61.808 8.35124C63.4894 8.37108 65.1717 8.35845 66.8532 8.35845V8.34492C68.4165 8.34492 69.9799 8.34402 71.5441 8.34582C71.7794 8.34582 72.0164 8.34402 72.2508 8.36927C72.4567 8.39272 72.5446 8.52531 72.526 8.74629Z"
        fill="#FF577F"
      />
      <path
        d="M71.5015 12.635C70.3465 15.3977 69.1702 18.1514 68.0206 20.9159C67.7942 21.4592 67.408 21.5647 66.8913 21.5629C64.1703 21.5512 61.4493 21.5584 58.7283 21.5593H56.2444V21.5629H46.1301C45.9232 21.5629 45.7155 21.571 45.5095 21.5593C44.944 21.5259 44.8623 21.4304 45.0559 20.9069C46.0848 18.1252 47.1315 15.3508 48.1622 12.5701C48.3317 12.1105 48.6336 11.924 49.1076 11.9258C51.1477 11.9339 53.1887 11.9186 55.2288 11.933C55.9345 11.9384 56.0091 12.0673 55.7534 12.7503C55.4179 13.6478 55.045 14.5317 54.7085 15.4292C54.3978 16.2555 54.4848 16.4141 55.322 16.4204C57.3035 16.4348 59.285 16.4015 61.2665 16.4177C61.8986 16.4231 62.2164 16.1023 62.4774 15.5689C63.1343 14.2254 63.137 14.2001 61.666 14.0911C61.1058 14.0497 60.5421 14.0623 59.9819 14.019C59.4927 13.9812 59.4137 13.8505 59.5486 13.3865C59.5984 13.2144 59.6942 13.0558 59.7404 12.8828C59.9464 12.1114 60.4577 11.9015 61.207 11.9123C63.4832 11.9465 65.7612 11.924 68.0383 11.9249C69.0442 11.9249 70.05 11.9123 71.055 11.933C71.6746 11.9456 71.7448 12.0529 71.5015 12.635Z"
        fill="#FF577F"
      />
      <path
        d="M44.1894 12.653C43.0691 15.4274 41.9283 18.1919 40.8026 20.9636C40.6348 21.3763 40.3667 21.5665 39.9237 21.5647C37.8854 21.5575 35.8471 21.5728 33.8088 21.5593C33.1669 21.5548 33.0701 21.4133 33.3054 20.7852C34.3317 18.0387 35.3828 15.3013 36.4135 12.5566C36.5884 12.0916 36.9 11.9222 37.366 11.9267C38.4296 11.9366 39.4931 11.9294 40.5567 11.9294V11.9267C41.59 11.9267 42.6243 11.9141 43.6576 11.9303C44.351 11.942 44.4344 12.0456 44.1894 12.653Z"
        fill="#FF577F"
      />
      <path
        d="M32.4017 12.9666C31.3852 15.3959 30.3438 17.8144 29.3558 20.2554C29.0681 20.9646 28.6695 21.2655 27.8972 21.2502C25.8295 21.2087 23.7602 21.2412 21.6917 21.2421C21.515 21.2421 21.3366 21.2376 21.1608 21.2205C20.8474 21.1898 20.7604 20.9934 20.8474 20.7141C20.9184 20.4861 21.0125 20.2653 21.1058 20.0455C21.7982 18.4208 22.4933 16.798 23.1876 15.1751C23.247 15.0381 23.311 14.9021 23.3642 14.7624C23.6598 14.001 23.58 13.8586 22.7898 13.8262C21.1075 13.7577 19.4252 13.673 17.742 13.6514C15.7223 13.6252 16.1307 13.3955 15.2651 15.2283C14.4466 16.9592 13.6272 18.6893 12.8442 20.4365C12.5734 21.0429 12.1802 21.2691 11.5365 21.2619C9.52751 21.2376 7.51761 21.2556 5.50771 21.2574C5.44912 21.2574 5.38964 21.2583 5.33105 21.2556C4.60752 21.2151 4.53561 21.1141 4.75933 20.45C4.7975 20.3365 4.84367 20.2257 4.88805 20.1139C5.84063 17.7234 6.79142 15.331 7.74843 12.9422C8.14793 11.9438 8.16657 11.9276 9.25231 11.9267C12.9756 11.9222 16.6998 11.9249 20.4231 11.9249C24.1463 11.9249 27.93 11.9222 31.6826 11.9267C32.7719 11.9276 32.8109 11.9871 32.4017 12.9666Z"
        fill="#FF577F"
      />
      <path
        d="M102.527 1.97155C102.476 2.1743 102.398 2.37073 102.322 2.56537C101.455 4.79915 100.562 7.02301 99.7316 9.27031C99.4608 10.0038 99.0515 10.2741 98.2863 10.2723C91.2188 10.2507 84.1522 10.2597 77.0847 10.2597C77.0252 10.2597 76.9657 10.2606 76.9071 10.2588C76.1357 10.2273 76.0584 10.1326 76.3292 9.40998C76.8334 8.06376 77.3235 6.71034 77.889 5.39025C78.1811 4.70724 78.0736 4.20984 77.5836 3.69442C77.0092 3.0916 76.4979 2.4257 75.9341 1.81116C75.5613 1.40477 75.3979 1.4255 75.1618 1.93911C74.6487 3.05375 74.1772 4.18731 73.6845 5.31186C73.2904 6.21294 73.2877 6.1814 72.2899 6.1742C67.7658 6.13905 63.2409 6.12914 58.7168 6.0931C58.0998 6.08859 57.7278 6.31386 57.5157 6.91579C57.2067 7.79074 56.8276 8.63955 56.5045 9.51C56.3127 10.0272 55.9887 10.2651 55.4356 10.2606C53.3955 10.2471 51.3555 10.266 49.3154 10.2516C48.6575 10.2471 48.575 10.1164 48.8005 9.49198C49.3491 7.97005 49.8951 6.44632 50.4917 4.94422C50.7456 4.30445 50.7234 3.82147 50.173 3.35561C49.6749 2.93391 49.2515 2.4239 48.7738 1.97606C48.3397 1.56877 48.1808 1.5967 47.9411 2.16438C47.301 3.6818 46.6885 5.21004 46.0644 6.73467C45.6782 7.6763 45.2778 8.61252 44.9103 9.56226C44.7221 10.047 44.414 10.2624 43.9009 10.2597C41.8022 10.2489 39.7027 10.2669 37.6031 10.2516C36.9186 10.2462 36.8361 10.1065 37.09 9.41629C37.6173 7.98267 38.142 6.54634 38.7226 5.13525C39.0084 4.44052 38.9774 3.89716 38.4243 3.35742C37.9786 2.92219 37.6217 2.39506 37.1956 1.93821C36.8263 1.54264 36.6754 1.58048 36.4126 2.07518C36.3149 2.259 36.2413 2.45724 36.1605 2.65007C35.2434 4.83068 34.3015 7.00139 33.4262 9.19822C33.1154 9.97946 32.6787 10.284 31.8362 10.2813C24.4136 10.2534 16.9918 10.2651 9.56924 10.2651C9.48046 10.2651 9.39169 10.266 9.30291 10.2624C8.43645 10.2291 8.34146 10.1038 8.65573 9.29824C9.26562 7.73577 9.89594 6.1814 10.5174 4.62344C10.6168 4.37384 10.6967 4.11252 10.8192 3.87464C11.1104 3.31326 11.0012 2.87353 10.5484 2.43561C9.82492 1.73547 9.14755 0.986671 8.39117 0.197324C8.8244 -0.0576825 9.15732 0.00719535 9.47336 0.00719535C12.8451 0.00899751 16.2159 0.0189094 19.5868 0.0270191H19.6756C20.708 0.0450408 20.7782 0.145962 20.3334 1.11462C19.5841 2.74648 18.8162 4.37023 18.0572 5.99758C17.9932 6.13275 17.9267 6.26701 17.8663 6.40397C17.5139 7.20954 17.5902 7.37173 18.438 7.37444C19.4723 7.37894 20.5056 7.31136 21.5408 7.29694C22.6638 7.27982 23.7886 7.26 24.9107 7.29604C25.5659 7.31767 25.9387 7.08158 26.1758 6.44903C26.87 4.5982 27.6157 2.76811 28.3322 0.925397C28.6535 0.100007 28.6873 0.0495462 29.5493 0.0468429C31.7971 0.0405354 34.044 0.0450408 36.2919 0.0540516C36.9763 0.0567548 36.9968 0.0711722 36.9701 0.778521C36.9577 1.10381 37.1068 1.22726 37.3678 1.24979C37.7496 1.28313 38.1349 1.29214 38.5184 1.29304C54.3091 1.30926 70.0997 1.32368 85.8904 1.33809C86.2162 1.33899 86.5412 1.3408 86.867 1.3471C87.2309 1.35341 87.3339 1.55435 87.2283 1.88415C87.1644 2.08329 87.08 2.27612 87.001 2.46985C86.4231 3.88365 85.8434 5.29654 85.2654 6.70944C85.1749 6.9311 85.0826 7.15277 85.0089 7.38074C84.9059 7.70243 85.0115 7.91328 85.3595 7.95023C85.5646 7.97275 85.7724 7.97906 85.9792 7.98086C87.7822 7.99348 89.5871 7.98086 91.3901 8.02772C91.9876 8.04394 92.3063 7.8448 92.5176 7.27622C93.1435 5.5921 93.8128 3.9242 94.468 2.25089C94.8063 1.38765 94.8524 1.34891 95.7668 1.3462C97.7483 1.3408 99.7298 1.3462 101.711 1.3462C101.829 1.3462 101.948 1.3408 102.066 1.35161C102.564 1.39937 102.644 1.50209 102.527 1.97155Z"
        fill="#FF577F"
      />
    </g>
    <defs>
      <clipPath id="clip0_74_195">
        <rect width="151" height="54" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default LogoSVG