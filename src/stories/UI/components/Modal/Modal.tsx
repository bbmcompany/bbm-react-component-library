import { C3Button } from "../Button/Button";
import './modal.scss'
interface C3ModalProps {
    className?: string;
    title?: string;
    modalButtonText?: string;
    buttonText?: string;
    children?: any;
}

export const C3Modal = ({
                            children = undefined,
                            title = 'Custom Title Here',
                            modalButtonText = 'Close',
                            buttonText = 'Open Modal',
                            className = ' ',
                            ...props
                         }: C3ModalProps) => {
    const openModal = () => {
        document.getElementById('wrapper')!.style.display = 'flex';
    }
    const closeModal = () => {
        document.getElementById('wrapper')!.style.display = 'none';
    }
    return (
        <div className={['bbm-rcl-modal', className].join(' ')}>
            <C3Button className={'bbm-rcl-modal--button'} primary
                      onClick={() => openModal()}>{buttonText}</C3Button>
            <div className={'bbm-rcl-modal--wrapper'} id={'wrapper'}>
                <div className={'body b-m-auto b-p-25 b-border-5'}>
                    <div className={'title'}>{title}
                    </div>
                    <div className={'content b-my-25'}>{children}</div>
                    <C3Button className={'close-button b-m-5'} danger size={'large'}
                              onClick={() => closeModal()}>{modalButtonText}</C3Button>
                </div>
            </div>
        </div>
    );
}