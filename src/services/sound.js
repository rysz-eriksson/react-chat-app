import notification from '../assets/notification_decorative-01.wav'

export const sound = new Audio(notification);
export const playSound = sound => {
    sound.play();
}