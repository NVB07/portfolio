import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RedirectLink } from "@/components/handleComponents/redirectLink/RedirectLink";
import cardStyle from "./cardProject.module.css";
const CardProject = ({ href = "", riderect, imageSrc, icon, title, descript, left }) => {
    return (
        <div className={`${cardStyle.CardWrapper} ${left ? cardStyle.CardWrapper_left : cardStyle.CardWrapper_right}`}>
            <div className={cardStyle.CardArea}>
                <RedirectLink href={href} riderectLink={riderect} style={`${cardStyle.Card}  ${left ? cardStyle.card_left : cardStyle.card_right}`}>
                    <img src={imageSrc} className={cardStyle.cardImage} alt={"card image"} />
                    <div className={cardStyle.CardContent}>
                        <div className={cardStyle.CardHeader}>
                            <span>
                                <FontAwesomeIcon className={cardStyle.icon} icon={icon} />
                            </span>
                            <span className={cardStyle.title}>{title}</span>
                        </div>
                        <p className={cardStyle.descript}>{descript}</p>
                    </div>
                </RedirectLink>
            </div>
        </div>
    );
};

export default CardProject;
