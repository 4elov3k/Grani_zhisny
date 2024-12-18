import React from 'react';
import {Profile} from "@/components/main/blocks";
import {textProfile, textProfileFile} from "@/components/main/blocks/Profile";
import Image from "next/image";

const About = () => {
    return (
        <div className=" wrapper font-montserrat indent-8 sm:p-6 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-teal-950 mb-4">Моя история</h1>
            <div>
                <p className="mb-8">
                    Мне повезло, мое первое образование техническое. Политех (электрофак) и работа
                    инженером-разработчиком в отделе управления радиолокационным комплексом. Оборонная
                    промышленность, классные специалисты-инженеры, интересные интеллигентные люди. Я очень
                    благодарна им за доверие ко мне, молодому тогда специалисту, и профессионализм.
                </p>
                
                <p className="mb-8">
                    Помню, я достаточно быстро погрузилась в работу. А суть работы отдела разработки такая: сначала
                    ты разрабатываешь схемы, а потом проверяешь, как работает опытный образец. Я уже тогда на
                    практике поняла, что из-за нестабильной работы одной микросхемы не будет работать ВЕСЬ комплекс.
                    Ошибки бывают разные: небрежность нанесения дорожек между составляющими, брак, отсутствие
                    элемента, ошибка проектирования.
                </p>
                <blockquote className="border-l-4 indent-12 border-primary pl-8 italic mb-4">
                    Супер, просто! Восторг! Пишу и понимаю, что я сейчас этим и занимаюсь, только на уровне людей и
                    организаций. Только все немного по-другому называется. Как все связано! Техническое образование
                    – это фундамент. Я рада, что начала свой образовательный путь именно с него.
                </blockquote>
                <div className="">
                <Image className="float-right mb-4 p-4 max-lg:w-full max-h-[800px] object-contain" src="/profile.jpg" width={'600'} height={'1000'}
                       alt={'profile'}/>
                </div>
                <p className="mb-8">
                    Сейчас все больше это вижу — взаимодействие большого с малым, связь макро- и микро- уровня. И
                    только в системном подходе можно это отследить и, по возможности, исправить.
                </p>
                <p className="mb-8">
                    В психологию я пришла в 1998 году, получив второе высшее образование. Работала и в личном и
                    групповом формате. Психологом, главным профконсультантом и бизнес-тренером в Центре
                    профориентации и психологической поддержки населения. Затем приглашение в коммерческую
                    организацию на должность директора по персоналу. И дальше управленческие должности в продажах,
                    логистике, опыт формирования служб с нуля, выстраивание производственных бизнес-процессов. Очень
                    пригодились и знания психологии и техническое образование.
                </p>
                <p className="mb-8">
                    И еще один ВУЗ – ВШЭ (маркетинг), для профессионального роста и изучения новых подходов анализа
                    рынка и законов развития предприятия. Конечно, в том ритме, в котором я работала, вести
                    постоянную психологическую практику было непросто. Я горжусь собой, что не оставила ее, и
                    приятно вспоминать, что старые клиенты находили меня, рекомендовали своим знакомым.
                </p>
                <p className="mb-8">
                    Свой профессиональный уровень психолога укрепила учебой в Московском гештальт-институте и
                    Институте психотерапии. За плечами сотни часов личной и групповой терапии и супервизий. Два
                    коучинговых образования: «Пошаговая система обучения бизнес-коучингу Coach2» в «Иматоне» и
                    «Наука и искусство трансформационного коучинга» в МЭУК. Все это внедрялось, опробовалось,
                    прочувствовалось, испытывалось на себе. Таковы правила долгосрочных программ и мои личные
                    принципы.
                </p>
                <p className="mb-8">
                    Я уверена, что невозможно стать экспертом с большой буквы в консультировании, если ты на
                    практике не ощутил, не проанализировал и не увидел, как это работает. Чтобы помочь человеку
                    пройти через его страхи, боль, переживания консультант сам должен быть достаточно устойчив,
                    чтобы быть рядом.
                </p>
                <p className="my-8">
                    И сейчас, в итоге, у меня частная практика со всем накопленным опытом и знаниями. Пониманием
                    того, что мне это все было нужно для постижения себя и для возможности соприкоснуться и
                    взаимодействовать с абсолютно разными людьми, побывать в различных, порой фантастических и
                    критических ситуациях, иметь возможность применить и оценить на практике все свои знания и
                    навыки и положить в копилку личного пережитого опыта.
                </p>
            </div>

        </div>
    );
};

export default About;