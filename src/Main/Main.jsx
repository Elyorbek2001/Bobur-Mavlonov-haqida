import React from 'react'
import "./Main.css"
import bobur from "./rasm/Rectangle 13.png"
import profil from "./rasm/Ellipse 4.png"
import Frame from "./rasm/Frame.png"
import Group from "./rasm/Group.png"
import gl from "./rasm/gl.png"
import k from "./rasm/k.png"
import like from "./rasm/like.png"
import commen from "./rasm/comment.png"
import aylana from "./rasm/aylana.png"
import st from "./rasm/statistika.png"
import like2 from "./rasm/like2.png"
import aylana2 from "./rasm/aylana2.png"
import jonatish from "./rasm/jonatish.png"
import image8 from "./rasm/image 8.png"



function Main() {
    return (



        <div className='kattaa'>
            <div className='Main'>

                <div className='b'>
                    {/* <img className='icon' src={icon} alt="" /> */}
                    <svg width="152" height="50" viewBox="0 0 152 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 24.2929C-0.0976315 24.6834 -0.0976314 25.3166 0.292893 25.7071L6.65686 32.0711C7.04738 32.4616 7.68054 32.4616 8.07107 32.0711C8.46159 31.6805 8.46159 31.0474 8.07107 30.6569L2.41421 25L8.07107 19.3431C8.46159 18.9526 8.46159 18.3195 8.07107 17.9289C7.68054 17.5384 7.04738 17.5384 6.65685 17.9289L0.292892 24.2929ZM21 24L1 24L1 26L21 26L21 24Z" fill="black" />
                        <path d="M62.6016 22V7.99609H67.6992C69.2617 7.99609 70.4629 8.28255 71.3027 8.85547C72.1426 9.42839 72.5625 10.2357 72.5625 11.2773C72.5625 12.0326 72.3053 12.6934 71.791 13.2598C71.2832 13.8262 70.6322 14.2201 69.8379 14.4414V14.4805C70.834 14.6042 71.6283 14.972 72.2207 15.584C72.8197 16.196 73.1191 16.9414 73.1191 17.8203C73.1191 19.1029 72.6602 20.1217 71.7422 20.877C70.8242 21.6257 69.571 22 67.9824 22H62.6016ZM65.7559 10.3203V13.6406H67.1426C67.7936 13.6406 68.3047 13.4844 68.6758 13.1719C69.0534 12.8529 69.2422 12.4167 69.2422 11.8633C69.2422 10.8346 68.474 10.3203 66.9375 10.3203H65.7559ZM65.7559 15.9844V19.6758H67.4648C68.194 19.6758 68.7637 19.5065 69.1738 19.168C69.5905 18.8294 69.7988 18.3672 69.7988 17.7812C69.7988 17.2214 69.5938 16.7819 69.1836 16.4629C68.7799 16.1439 68.2135 15.9844 67.4844 15.9844H65.7559ZM79.8965 22.2441C78.2298 22.2441 76.918 21.7786 75.9609 20.8477C75.0104 19.9102 74.5352 18.6406 74.5352 17.0391C74.5352 15.3854 75.0299 14.0931 76.0195 13.1621C77.0091 12.2246 78.347 11.7559 80.0332 11.7559C81.6934 11.7559 82.9954 12.2246 83.9395 13.1621C84.8835 14.0931 85.3555 15.3268 85.3555 16.8633C85.3555 18.5234 84.8672 19.8353 83.8906 20.7988C82.9206 21.7624 81.5892 22.2441 79.8965 22.2441ZM79.9746 14.1191C79.2454 14.1191 78.679 14.3698 78.2754 14.8711C77.8717 15.3724 77.6699 16.082 77.6699 17C77.6699 18.9206 78.4447 19.8809 79.9941 19.8809C81.472 19.8809 82.2109 18.8945 82.2109 16.9219C82.2109 15.0534 81.4655 14.1191 79.9746 14.1191ZM90.4824 20.8379H90.4434V22H87.3574V7.19531H90.4434V13.5039H90.4824C91.2441 12.3385 92.3281 11.7559 93.7344 11.7559C95.0234 11.7559 96.0163 12.1986 96.7129 13.084C97.4095 13.9694 97.7578 15.1803 97.7578 16.7168C97.7578 18.3835 97.3509 19.7214 96.5371 20.7305C95.7233 21.7396 94.6361 22.2441 93.2754 22.2441C92.0449 22.2441 91.1139 21.7754 90.4824 20.8379ZM90.3945 16.6191V17.6445C90.3945 18.2891 90.5801 18.8229 90.9512 19.2461C91.3223 19.6693 91.7975 19.8809 92.377 19.8809C93.0801 19.8809 93.6237 19.6107 94.0078 19.0703C94.3984 18.5234 94.5938 17.752 94.5938 16.7559C94.5938 15.929 94.4147 15.2845 94.0566 14.8223C93.7051 14.3535 93.2005 14.1191 92.543 14.1191C91.9245 14.1191 91.4102 14.3503 91 14.8125C90.5964 15.2747 90.3945 15.877 90.3945 16.6191ZM109.262 22H106.186V20.4766H106.137C105.375 21.6549 104.356 22.2441 103.08 22.2441C100.762 22.2441 99.6035 20.8411 99.6035 18.0352V12H102.68V17.7617C102.68 19.1745 103.24 19.8809 104.359 19.8809C104.913 19.8809 105.355 19.6888 105.688 19.3047C106.02 18.9141 106.186 18.3867 106.186 17.7227V12H109.262V22ZM118.393 14.7832C118.021 14.5814 117.589 14.4805 117.094 14.4805C116.423 14.4805 115.899 14.7279 115.521 15.2227C115.144 15.7109 114.955 16.3783 114.955 17.2246V22H111.869V12H114.955V13.8555H114.994C115.482 12.5013 116.361 11.8242 117.631 11.8242C117.956 11.8242 118.21 11.8633 118.393 11.9414V14.7832Z" fill="black" />
                        <path opacity="0.6" d="M66.6562 46H65.375V36.3203C65.276 36.4193 65.1302 36.5339 64.9375 36.6641C64.75 36.7891 64.5365 36.9141 64.2969 37.0391C64.0625 37.1641 63.8125 37.2812 63.5469 37.3906C63.2865 37.5 63.0312 37.5859 62.7812 37.6484V36.3516C63.0625 36.2734 63.3594 36.1693 63.6719 36.0391C63.9896 35.9036 64.2995 35.7552 64.6016 35.5938C64.9089 35.4271 65.1979 35.2552 65.4688 35.0781C65.7396 34.8958 65.974 34.7188 66.1719 34.5469H66.6562V46ZM72.0938 44.2188L70.8438 48.0625H69.9297L70.8438 44.2188H72.0938ZM81.0625 40.3516C81.0625 41.2891 80.9766 42.1198 80.8047 42.8438C80.638 43.5677 80.3932 44.1797 80.0703 44.6797C79.7526 45.1745 79.3594 45.5521 78.8906 45.8125C78.4271 46.0677 77.8984 46.1953 77.3047 46.1953C76.7422 46.1953 76.2396 46.0729 75.7969 45.8281C75.3594 45.5781 74.9896 45.2161 74.6875 44.7422C74.3854 44.2682 74.1562 43.6875 74 43C73.8438 42.3073 73.7656 41.5156 73.7656 40.625C73.7656 39.6458 73.8464 38.7812 74.0078 38.0312C74.1745 37.2812 74.4167 36.6536 74.7344 36.1484C75.0521 35.638 75.4453 35.2552 75.9141 35C76.388 34.7396 76.9297 34.6094 77.5391 34.6094C79.888 34.6094 81.0625 36.5234 81.0625 40.3516ZM79.75 40.4766C79.75 37.2891 78.9922 35.6953 77.4766 35.6953C75.8776 35.6953 75.0781 37.3177 75.0781 40.5625C75.0781 43.5885 75.862 45.1016 77.4297 45.1016C78.9766 45.1016 79.75 43.5599 79.75 40.4766ZM89.6094 35.5391C89.4375 35.8359 89.2292 36.2057 88.9844 36.6484C88.7448 37.0911 88.4896 37.5885 88.2188 38.1406C87.9479 38.6927 87.6719 39.2865 87.3906 39.9219C87.1094 40.5573 86.8464 41.2135 86.6016 41.8906C86.3568 42.5677 86.1406 43.2552 85.9531 43.9531C85.7708 44.6458 85.638 45.3281 85.5547 46H84.1797C84.2734 45.3333 84.4167 44.6536 84.6094 43.9609C84.8073 43.263 85.0286 42.5807 85.2734 41.9141C85.5234 41.2422 85.7865 40.5964 86.0625 39.9766C86.3385 39.3568 86.6068 38.7865 86.8672 38.2656C87.1276 37.7448 87.3646 37.2865 87.5781 36.8906C87.7969 36.4896 87.9714 36.1771 88.1016 35.9531H82.4844V34.7969H89.6094V35.5391ZM98.3125 40.3516C98.3125 41.2891 98.2266 42.1198 98.0547 42.8438C97.888 43.5677 97.6432 44.1797 97.3203 44.6797C97.0026 45.1745 96.6094 45.5521 96.1406 45.8125C95.6771 46.0677 95.1484 46.1953 94.5547 46.1953C93.9922 46.1953 93.4896 46.0729 93.0469 45.8281C92.6094 45.5781 92.2396 45.2161 91.9375 44.7422C91.6354 44.2682 91.4062 43.6875 91.25 43C91.0938 42.3073 91.0156 41.5156 91.0156 40.625C91.0156 39.6458 91.0964 38.7812 91.2578 38.0312C91.4245 37.2812 91.6667 36.6536 91.9844 36.1484C92.3021 35.638 92.6953 35.2552 93.1641 35C93.638 34.7396 94.1797 34.6094 94.7891 34.6094C97.138 34.6094 98.3125 36.5234 98.3125 40.3516ZM97 40.4766C97 37.2891 96.2422 35.6953 94.7266 35.6953C93.1276 35.6953 92.3281 37.3177 92.3281 40.5625C92.3281 43.5885 93.112 45.1016 94.6797 45.1016C96.2266 45.1016 97 43.5599 97 40.4766ZM111.453 35.9844H108.219V46H106.906V35.9844H103.68V34.7969H111.453V35.9844ZM122.234 38L119.836 46H118.508L116.859 40.2734C116.797 40.0547 116.755 39.8073 116.734 39.5312H116.703C116.688 39.7188 116.633 39.9609 116.539 40.2578L114.75 46H113.469L111.047 38H112.391L114.047 44.0156C114.099 44.1979 114.135 44.4375 114.156 44.7344H114.219C114.234 44.5052 114.281 44.2604 114.359 44L116.203 38H117.375L119.031 44.0312C119.083 44.224 119.122 44.4635 119.148 44.75H119.211C119.221 44.5469 119.266 44.3073 119.344 44.0312L120.969 38H122.234ZM130.148 42.3203H124.5C124.521 43.2109 124.76 43.8984 125.219 44.3828C125.677 44.8672 126.307 45.1094 127.109 45.1094C128.01 45.1094 128.839 44.8125 129.594 44.2188V45.4219C128.891 45.9323 127.961 46.1875 126.805 46.1875C125.674 46.1875 124.786 45.8255 124.141 45.1016C123.495 44.3724 123.172 43.349 123.172 42.0312C123.172 40.7865 123.523 39.7734 124.227 38.9922C124.935 38.2057 125.812 37.8125 126.859 37.8125C127.906 37.8125 128.716 38.151 129.289 38.8281C129.862 39.5052 130.148 40.4453 130.148 41.6484V42.3203ZM128.836 41.2344C128.831 40.4948 128.651 39.9193 128.297 39.5078C127.948 39.0964 127.461 38.8906 126.836 38.8906C126.232 38.8906 125.719 39.1068 125.297 39.5391C124.875 39.9714 124.615 40.5365 124.516 41.2344H128.836ZM138.523 42.3203H132.875C132.896 43.2109 133.135 43.8984 133.594 44.3828C134.052 44.8672 134.682 45.1094 135.484 45.1094C136.385 45.1094 137.214 44.8125 137.969 44.2188V45.4219C137.266 45.9323 136.336 46.1875 135.18 46.1875C134.049 46.1875 133.161 45.8255 132.516 45.1016C131.87 44.3724 131.547 43.349 131.547 42.0312C131.547 40.7865 131.898 39.7734 132.602 38.9922C133.31 38.2057 134.188 37.8125 135.234 37.8125C136.281 37.8125 137.091 38.151 137.664 38.8281C138.237 39.5052 138.523 40.4453 138.523 41.6484V42.3203ZM137.211 41.2344C137.206 40.4948 137.026 39.9193 136.672 39.5078C136.323 39.0964 135.836 38.8906 135.211 38.8906C134.607 38.8906 134.094 39.1068 133.672 39.5391C133.25 39.9714 132.99 40.5365 132.891 41.2344H137.211ZM144.18 45.9219C143.878 46.0885 143.479 46.1719 142.984 46.1719C141.583 46.1719 140.883 45.3906 140.883 43.8281V39.0938H139.508V38H140.883V36.0469L142.164 35.6328V38H144.18V39.0938H142.164V43.6016C142.164 44.138 142.255 44.5208 142.438 44.75C142.62 44.9792 142.922 45.0938 143.344 45.0938C143.667 45.0938 143.945 45.0052 144.18 44.8281V45.9219ZM145.406 45.7109V44.3359C146.104 44.8516 146.872 45.1094 147.711 45.1094C148.836 45.1094 149.398 44.7344 149.398 43.9844C149.398 43.7708 149.349 43.5911 149.25 43.4453C149.156 43.2943 149.026 43.1615 148.859 43.0469C148.698 42.9323 148.505 42.8307 148.281 42.7422C148.062 42.6484 147.826 42.5521 147.57 42.4531C147.216 42.3125 146.904 42.1719 146.633 42.0312C146.367 41.8854 146.143 41.724 145.961 41.5469C145.784 41.3646 145.648 41.1589 145.555 40.9297C145.466 40.7005 145.422 40.4323 145.422 40.125C145.422 39.75 145.508 39.4193 145.68 39.1328C145.852 38.8411 146.081 38.599 146.367 38.4062C146.654 38.2083 146.979 38.0599 147.344 37.9609C147.714 37.862 148.094 37.8125 148.484 37.8125C149.177 37.8125 149.797 37.9323 150.344 38.1719V39.4688C149.755 39.0833 149.078 38.8906 148.312 38.8906C148.073 38.8906 147.857 38.9193 147.664 38.9766C147.471 39.0286 147.305 39.1042 147.164 39.2031C147.029 39.3021 146.922 39.4219 146.844 39.5625C146.771 39.6979 146.734 39.849 146.734 40.0156C146.734 40.224 146.771 40.3984 146.844 40.5391C146.922 40.6797 147.034 40.8047 147.18 40.9141C147.326 41.0234 147.503 41.1224 147.711 41.2109C147.919 41.2995 148.156 41.3958 148.422 41.5C148.776 41.6354 149.094 41.776 149.375 41.9219C149.656 42.0625 149.896 42.224 150.094 42.4062C150.292 42.5833 150.443 42.7891 150.547 43.0234C150.656 43.2578 150.711 43.5365 150.711 43.8594C150.711 44.2552 150.622 44.599 150.445 44.8906C150.273 45.1823 150.042 45.4245 149.75 45.6172C149.458 45.8099 149.122 45.9531 148.742 46.0469C148.362 46.1406 147.964 46.1875 147.547 46.1875C146.724 46.1875 146.01 46.0286 145.406 45.7109Z" fill="black" />
                    </svg>

                </div>

            </div>


            <div className='rasm'>
                <img className='Bobur' src={bobur} alt="" />
            </div>

            <div className='prof'>
                <img className='profil' src={profil} alt="" />

                <button className='edit'>Edit Profile</button>
            </div>

            <div className='name'>
                <h2>Bobur</h2>
                <p className='pp'>@bobur_mavlonov</p>
                <p className='ux'>UX&UI designer at <a href="">@abutechuz</a> </p>
                <div className='lakatsia'>
                    <p className='ux'><img src={Frame} alt="" /> Mashagdaman </p>
                    <p><img src={Group} alt="" /> <a href="t.me/boburjon_mavlonov">t.me/boburjon_mavlonov</a></p>
                    <p><img src={gl} alt="" />Born November 24, 2000</p>
                    <p><img src={k} alt="" />Joined May 2020</p>

                </div>

                <div className='f'>
                    <div className='s'>
                        <h5>67</h5>
                        <p>following</p>
                    </div>
                    <div className='s'>
                        <h5>341</h5>
                        <p>followers</p>
                    </div>

                </div>

                <div className="twets">
                    <h5 className='w'>Tweets</h5>
                    <p>Tweets & replies</p>
                    <p>Media</p>
                    <p>Likes</p>
                </div>

                <div className="Bobur">
                    <div className='img1'><img className='Bobur' src={profil} alt="" /></div>
                    <div className="name1">
                        <div className='name2'><h4 className='bbb'>Bobur</h4>
                            <a className='bbbb' href="">boburjon_mavlonov. </a> Apr1
                        </div>
                        <div className='name3'>
                            <p className='kurss'>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
                        </div>

                        <div className="name4">

                            <div> <img src={commen} alt="" />10</div>
                            <div> <img src={aylana} alt="" />1</div>
                            <div><img src={like} alt="" />8</div>
                            <div> <img src={jonatish} alt="" /></div>
                            <div><img src={st} alt="" /></div>

                        </div>


                    </div>



                </div>

                <div className="Bobur">
                    <div className='img2'><img className='Bobur' src={profil} alt="" /></div>
                    <div className="name1">
                        <div className='name2'><h4 className='bbb'>Bobur</h4>
                            <a className='bbbb' href="">boburjon_mavlonov. </a> Apr1
                        </div>
                        <div className='name3'>
                            <p className='kurss'>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.
                            </p>
                            <p>
                                Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.

                            </p>
                            <p>
                                Gap faqat biznes trenerlar haqida emas.
                            </p>
                        </div>

                        <div className="name5">
                            <div> <img src={commen} alt="" /></div>
                            <div> <img src={aylana2} alt="" />5</div>
                            <div><img src={like2} alt="" />9</div>
                            <div> <img src={jonatish} alt="" /></div>
                            <div><img src={st} alt="" /></div>
                        </div>


                    </div>



                </div>

                <div className="Bobur">
                    <div className='img3'><img className='Bobur' src={profil} alt="" /></div>
                    <div className="name8">
                        <div className='name2'><h4 className='bbb'>Bobur</h4>
                            <a className='bbbb' href="">boburjon_mavlonov. </a> Apr1
                        </div>
                        <div className='name3'>
                            <p className='kurss'>A bo'pti maskamasman</p>
                        </div>

                        <div className='img3'>
                            <img src={image8} alt="" />
                        </div>

                        <div className="name7">

                            <div> <img src={commen} alt="" />10</div>
                            <div> <img src={aylana} alt="" />1</div>
                            <div><img src={like} alt="" />8</div>
                            <div> <img src={jonatish} alt="" /></div>
                            <div><img src={st} alt="" /></div>

                        </div>


                    </div>



                </div>

            </div>

        </div>
    )
}

export default Main
