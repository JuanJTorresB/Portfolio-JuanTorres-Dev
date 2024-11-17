import { Titulo } from "./Titulo.jsx"
import { ProjectCard } from './ProjectCard.jsx'

const iconsGranjaEstelar = [
    /* Star UML */
    <img src="public/StarUML.png" className="w-20 h-20" />,
    /* My SQL */
    <svg className="w-20 h-20" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.875977" width="80" height="80" rx="15" fill="#EEEEEE" />
        <path d="M70.3533 58.9464C66.5447 58.85 63.5929 59.2367 61.1172 60.2997C60.403 60.5894 59.2602 60.5897 59.165 61.508C59.5459 61.8947 59.5935 62.523 59.9268 63.0544C60.4988 64.0207 61.4978 65.3257 62.4025 66.0026C63.4021 66.7757 64.4023 67.5487 65.4493 68.2253C67.3062 69.3853 69.4013 70.0617 71.2103 71.2217C72.2581 71.8978 73.3048 72.7683 74.3523 73.493C74.8761 73.8791 75.2091 74.508 75.876 74.7494V74.6046C75.5424 74.1694 75.4472 73.5413 75.1141 73.058C74.6385 72.5747 74.1619 72.1397 73.6857 71.6564C72.3052 69.772 70.5913 68.1287 68.7347 66.7757C67.2113 65.7124 63.8783 64.2627 63.2596 62.4744C63.2596 62.4744 63.2117 62.4263 63.1643 62.378C64.2116 62.2813 65.4493 61.8947 66.4494 61.6047C68.0681 61.1694 69.5438 61.2664 71.2103 60.8314C71.9719 60.638 72.7337 60.3964 73.4953 60.1547V59.72C72.6387 58.85 72.0198 57.6903 71.1151 56.8687C68.687 54.7418 66.0206 52.6641 63.2596 50.9244C61.7835 49.9577 59.8789 49.3294 58.3079 48.5081C57.7371 48.2178 56.7846 48.0731 56.4515 47.5897C55.5942 46.5267 55.1181 45.1254 54.4994 43.8687C53.1191 41.2105 51.7856 38.2628 50.5953 35.4601C49.7388 33.5751 49.215 31.6901 48.1675 29.9507C43.2638 21.7351 37.9315 16.7575 29.7429 11.8762C27.9812 10.8615 25.8865 10.4265 23.6489 9.89513C22.4591 9.84652 21.2684 9.75014 20.0783 9.70153C19.3165 9.3632 18.5547 8.44517 17.8881 8.01018C15.1749 6.27022 8.17586 2.50115 6.17634 7.47881C4.89075 10.6198 8.08091 13.7125 9.17549 15.3078C9.98548 16.4191 11.0324 17.6755 11.6038 18.9321C11.9371 19.7532 12.0321 20.6238 12.3654 21.4935C13.1275 23.6192 13.8411 25.9878 14.8413 27.9694C15.3651 28.9841 15.9362 30.0471 16.6028 30.9654C16.9837 31.4968 17.65 31.7388 17.7931 32.6085C17.1268 33.5751 17.0789 35.0251 16.6977 36.2331C14.9839 41.6941 15.6508 48.4597 18.0785 52.4707C18.8401 53.6785 20.6494 56.3373 23.0775 55.3221C25.2201 54.4524 24.744 51.6977 25.3624 49.2814C25.5058 48.7008 25.4106 48.3147 25.696 47.9281V48.025C26.3626 49.3778 27.0289 50.683 27.6479 52.036C29.124 54.4037 31.6946 56.8687 33.8369 58.512C34.98 59.3814 35.8844 60.8797 37.3128 61.4114V61.2661H37.2173C36.9316 60.8311 36.5031 60.638 36.1224 60.2994C35.2656 59.43 34.3131 58.3667 33.6468 57.4001C31.6475 54.6935 29.8855 51.6974 28.3145 48.6044C27.553 47.1067 26.8861 45.4634 26.2674 43.9654C25.9814 43.3849 25.9814 42.5154 25.5055 42.2257C24.7913 43.2887 23.7441 44.2071 23.2203 45.5117C22.3162 47.5897 22.2207 50.1511 21.8874 52.8088C21.697 52.8577 21.7919 52.8088 21.6967 52.906C20.1736 52.5188 19.6498 50.9244 19.0782 49.5711C17.6497 46.1401 17.4117 40.6308 18.6499 36.6681C18.9832 35.6531 20.4116 32.4637 19.8403 31.4971C19.5546 30.5788 18.602 30.0471 18.0785 29.3224C17.4598 28.4041 16.793 27.2447 16.3647 26.2295C15.222 23.5231 14.6506 20.5268 13.4129 17.8205C12.8415 16.5639 11.8422 15.2594 11.0324 14.0995C10.128 12.7948 9.12815 11.8762 8.41394 10.3298C8.17614 9.79847 7.84256 8.92849 8.22348 8.34851C8.31871 7.96185 8.50889 7.81713 8.89008 7.72047C9.50906 7.18853 11.2708 7.86518 11.8892 8.15518C13.651 8.8796 15.1267 9.55681 16.6028 10.5715C17.2691 11.0548 17.9833 11.9731 18.8401 12.2148H19.84C21.3637 12.5528 23.0772 12.3115 24.5056 12.7462C27.0292 13.5675 29.3141 14.7758 31.3616 16.0808C37.5985 20.0918 42.7397 25.7945 46.2156 32.6085C46.7869 33.7195 47.0247 34.7351 47.5485 35.8945C48.5487 38.2628 49.7864 40.6791 50.7857 42.9988C51.7856 45.2698 52.7376 47.5898 54.1661 49.4747C54.8803 50.4891 57.7366 51.021 59.0222 51.5527C59.9744 51.9874 61.4505 52.3744 62.3073 52.9057C63.9259 53.9201 65.5445 55.0807 67.0682 56.1918C67.83 56.7717 70.2101 57.98 70.3533 58.9464Z" fill="#00546B" />
    </svg>

]

export const ProjectSection = () => {
    return <section className="text-center">
        <Titulo titulo="Projects" />
        <div className="flex flex-col justify-center mt-16 items-center gap-8">
            <ProjectCard name="Granja Estelar Database"
                imgUbi="public/GranjaEstelarDB.png"
                description="Granja Estelar Database is a MySQL database designed to store and manage records related to farm production, providing easy access to information."
                Icons={iconsGranjaEstelar} />
            <ProjectCard name="Granja Estelar Database"
                imgUbi="public/GranjaEstelarDB.png"
                description="Granja Estelar Database is a MySQL database designed to store and manage records related to farm production, providing easy access to information."
                Icons={iconsGranjaEstelar} />
            <ProjectCard name="Granja Estelar Database"
                imgUbi="public/GranjaEstelarDB.png"
                description="Granja Estelar Database is a MySQL database designed to store and manage records related to farm production, providing easy access to information."
                Icons={iconsGranjaEstelar} />
        </div>
    </section>
}
