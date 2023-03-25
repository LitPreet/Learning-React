import React , { useState } from 'react';
import ReactDOM  from 'react-dom/client';

const Section = ({ title, description ,setIsVisible,isVisible}) => {

  return (
    <div className="border border-emerald-600 p-2 m-2">
      <h1 className="font-bold text-xl">{title}</h1>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(!isVisible)
          }}
          className="w-[70px] bg-red-500 text-white font-bold rounded-md"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className="w-[70px] bg-green-500 text-white font-bold rounded-md"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState('team');
  return (
    <div>
      <h1 className="text-5xl font-bold p-2 m-2 ">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible = {visibleSection === 'about'}
        setIsVisible = {() => setVisibleSection(visibleSection === 'about' ? '' : 'about')}
      />

      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible = {visibleSection === 'team'}
        setIsVisible = {() => setVisibleSection(visibleSection === 'team' ? '' : 'team')}
      />

      <Section
        title={"Careers Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible = {visibleSection === 'careers'}
        setIsVisible = {() => setVisibleSection(visibleSection === 'careers' ? '' : 'careers')}
      />
    </div>
  );
};
export default Instamart;
