import style from "./mainLayout.module.css";

const MainLayout = ({ leftChild, rightChild }) => {
    return (
        <div className={style.mainContent}>
            <div className={style.leftContent}>{leftChild}</div>
            <div className={style.rightContent}>{rightChild}</div>
        </div>
    );
};

export default MainLayout;
