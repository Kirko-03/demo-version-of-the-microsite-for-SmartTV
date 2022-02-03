import b from './BannerButton.module.css'

type BannerButtonType = {
  text: string;
  setPanel: (panel: boolean) => void;
};

export const BannerButton = (props: BannerButtonType) => {
  return (
    <button
      className={b.bannerButton}
      onClick={() => props.setPanel(true)}
    >
      {props.text}
    </button>
  );
};
