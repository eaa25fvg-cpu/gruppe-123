class SongItem extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: 'open' });

      // Laver elementerne
      const wrapper = document.createElement('div');
      wrapper.classList.add('song-wrapper');

      const metaWrapper = document.createElement('div');
      metaWrapper.classList.add('meta-wrapper');

      const cover = document.createElement('img');
      cover.classList.add('cover');

      const textWrapper = document.createElement('div');
      textWrapper.classList.add('text-wrapper');

      const title = document.createElement('p');
      title.classList.add('title');

      const artist = document.createElement('p');
      artist.classList.add('artist');

      const album = document.createElement('p');
      album.classList.add('album');

      const duration = document.createElement('p');
      duration.classList.add('duration');


      const iconStyle = document.createElement('link');
      iconStyle.rel = 'stylesheet';
      iconStyle.href = 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css';
      root.appendChild(iconStyle);

      const addButton = document.createElement('i')
      addButton.classList.add('ph-fill', 'ph-plus-circle');
      addButton.id = 'add-button';


      // Gør content tilgængelig gennem parametere
      cover.src = this.getAttribute('cover');
      title.textContent = this.getAttribute('title');
      artist.textContent = this.getAttribute('artist');
      album.textContent = this.getAttribute('album')
      duration.textContent = this.getAttribute('duration')


      // Styling
      const style = document.createElement('style');
      style.textContent = `
        .song-wrapper {
        cursor: pointer;
        display: grid;
        grid-template-columns: 3fr 4fr 1fr 50px;
        align-items: center;
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        border-radius: 12px;
        }

        .song-wrapper:hover {
        background-color: #FFFFFF1A;
        }

        .meta-wrapper {
        display: flex;
        gap: 12px;
        align-items: center;
        }

        .cover {
    width: 46px;
    height: 46px;
    border-radius: 6px;
    border-style: solid 1px;
    border-color: #FFFFFF1F;
}


        p {
        font-family: "Inter", sans-serif;
        color: rgba(255, 255, 255, 0.80);
        margin: 0;
        line-height: 1.4;
        font-size: 12px;
        }

        .title {
        color: #fff;
        font-size: 14px;
        }

        .ph-plus-circle {
        justify-self: end;
        font-size: 30px;
        color: #FBFE81;
        transition: transform 0.2s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .rotated .ph-plus-circle {
        transform: rotate(-45deg);
        }
      `;


      // Samler elementerne
      root.append(style, wrapper);
      wrapper.append(metaWrapper, album, duration, addButton);
      metaWrapper.append(cover, textWrapper)
      textWrapper.append(title, artist);
      
      wrapper.addEventListener('click', () => {
        wrapper.classList.toggle('rotated');
      });

    }
}
customElements.define('song-item', SongItem);