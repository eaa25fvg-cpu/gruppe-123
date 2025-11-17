class QueueItem extends HTMLElement {
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


      // Gør content tilgængelig gennem parametere
      cover.src = this.getAttribute('cover');
      title.textContent = this.getAttribute('title');
      artist.textContent = this.getAttribute('artist');


      // Styling
      const style = document.createElement('style');
      style.textContent = `
        .song-wrapper {
        cursor: pointer;
        display: flex;
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
        align-self: stretch;
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
        font-size: 14px;
        }

        .title {
        color: #fff;
        font-size: 16px;
        }

        .ph-plus-circle {
        justify-self: end;
        font-size: 30px;
        color: #FBFE81;
        transition: transform 0.2s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .active .ph-plus-circle {
        transform: rotate(-45deg);
        }
      `;


      // Samler elementerne
      root.append(style, wrapper);
      wrapper.append(metaWrapper);
      metaWrapper.append(cover, textWrapper)
      textWrapper.append(title, artist);

    }
}
<<<<<<< HEAD:public/scripts/song-item.js



customElements.define('song-item', SongItem);
=======
customElements.define('queue-item', QueueItem);


/* EXAMPLE USAGE
          html += `
        <div class="clickableSong" data-id="${song.id}" data-name="${song.name}" data-artist_name="${song.artist_name}" data-cover_image="${song.cover_image}">
        <song-item
          title="${song.name}"
          artist="${song.artist_name}"
          cover="${song.cover_image}"
          album="${song.album_name}"
          duration="${song.duration}">
        </song-item>
        </div>
      `; 
*/
>>>>>>> origin/main:public/scripts/queue-item.js
