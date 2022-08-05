import {C3Button} from "../Button/Button";
import './modal.scss'
import './modal-stoires.scss'
interface C3ModalProps {
    className?: string;
    title?: string;
    modalButtonText?: string;
    modalButtonFunction?: any;
    buttonText?: string;
    children?: any;
}

export const C3Modal = ({
                            children = undefined,
                            modalButtonFunction = () => {
                            },
                            title = 'Custom Title Here',
                            modalButtonText = 'Function Button',
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
                    <div className={'title-group'}>
                        <div className={'title'}>{title}</div>
                        <C3Button
                            className='b-m-5'
                            icon='close'
                            iconButton
                            onClick={() => closeModal()}
                            primary
                            transparent
                        />
                    </div>
                    <div className={'content b-my-25'}>{children}</div>
                    <C3Button className={'close-button b-m-5'} danger size={'large'}
                              onClick={() => modalButtonFunction()}>{modalButtonText}</C3Button>
                </div>
            </div>
        </div>
    );
}