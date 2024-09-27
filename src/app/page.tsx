import Image from "next/image";
import {Services, Profile, Video} from "@/components/main/blocks";
import {textProfile} from "@/components/main/blocks/Profile";
import Link from "next/link";
import { Modal } from "./@modal/(.)form/modal";
import Banner from "@/components/main/blocks/banner";
export default function Home() {
    return (
        <>
            <Banner/>
            <h2 className="wrapper mb-16">Услуги</h2>
            <Services/>
            <h2 className="wrapper mb-16">Обо мне</h2>
            <Profile>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <p className="mb-4">
                        Я Ирина Тюрева — психолог, гештальт-терапевт, бизнес-тренер, игропрактик. У меня три высших
                        образования: техническое, психологическое, экономическое. И всем трем я нашла применение на
                        разных
                        этапах своей профессиональной деятельности.
                    </p>
                    <p className="mb-4">
                        У меня 18 лет управленческого стажа в позиции топ-менеджера в логистике, продажах и управлении
                        персоналом. Стаж проведения индивидуальных консультаций и групповых тренингов более 20 лет. А до
                        всего этого я успела успешно поработать инженером-разработчиком на оборонном предприятии.
                    </p>
                    <p className="mb-4">
                        Практика и опыт показали, что я хорошо умею диагностировать и затем выстраивать любые процессы.
                        В
                        технических схемах, бизнес-процессах и в клиентских человеческих историях на разных уровнях
                        бытия.
                        Образно говоря, могу найти затерявшийся импульс и вернуть его в жизнь.
                    </p>
                    <p className="mb-4">
                        Для оптимального и быстрого результата клиента я интегрировала в свой метод работы гештальт,
                        эриксоновсий гипноз, биолокацию (метод Пучко Л.Г.), карты МАК и свой бесценный опыт.
                    </p>
                    <p className="mb-4">
                        Чаще всего ко мне приходят за решением в вопросах:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Отношений в бизнесе и личной жизни</li>
                        <li>Отношений с самим собой и смыслом жизни</li>
                        <li>Карьерного роста и самореализации</li>
                    </ul>
                    <p className="mb-4">
                        Я предлагаю вам сопровождение на вашем пути.<br/>
                    </p>
                    <span className="font-bold text-primary-dark m-8">Я верю и знаю — Дорогу осилит идущий.</span>
                </div>
            </Profile>


            <Video/>
        </>
    );
}
