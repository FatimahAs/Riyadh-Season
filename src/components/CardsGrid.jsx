import React from 'react';
import CardComponent from './CardComponent';
import '../CardsGrid.css';

const cardsData = [{
        image1: './image/KV-Webook-Sizes_1280x1280.webp',
        image2: './image/blvd_world_colors.webp',
        image3: './image/stc_1.png',

    },
    {
        image1: './image/1280_xs_1280_px.webp',
        image2: './image/BlvdCity_VerticalLogo_OnDark_RGB.webp',
        image3: './image/suliman.webp',

    },
    {
        image1: './image/Webook_SQUARE_THUMBNAIL_1280x1280.webp',
        image2: './image/dior.webp',
        image3: '',

    },
    {
        image1: './image/1280_x_1280_-1.webp',
        image2: './image/the_groves_3d_Gold.webp',
        image3: '',

    },
    {
        image1: './image/WG_without_logo_WG_1280x1280.webp',
        image2: './image/woncer_garden.webp',
        image3: './image/new_muraba.webp',

    },
    {
        image1: './image/Square_Thumbnail.webp',
        image2: './image/BLVD_Runway_logo__2.16.10_PM.webp',
        image3: '',

    },
    {
        image1: './image/1280_xc_1280_px.webp',
        image2: './image/logo_-_souq_alawaleen.webp',
        image3: '',

    },
    {
        image1: './image/1280_wwx_1280_px.webp',
        image2: './image/via_ryiadh_logo.webp',
        image3: '',

    },
    {
        image1: './image/1280_x_128hh0_px.webp',
        image2: './image/Group_17.webp',
        image3: '',

    },
    {
        image1: './image/1280_wx_1280_px.webp',
        image2: './image/image__6_.webp',
        image3: '',

    },
    {
        image1: './image/Square-Thumbnail.webp',
        image2: './image/ZOO_LOGO_COLOR_1.webp',
        image3: '',

    },
    {
        image1: './image/WhatsApp_Image_2024-11-25_at_18.08.58_acb72643.webp',
        image2: './image/Logo-01.webp',
        image3: './image/tawinia.webp',

    },
    {
        image1: './image/1280x1280 (1).webp',
        image2: './image/ana_arabia.webp',
        image3: '',

    },
    {
        image1: './image/1280X1280.webp',
        image2: './image/logo.webp',
        image3: '',

    },
    {
        image1: './image/1280_x_1280_px.webp',
        image2: './image/Al_Hesn_Studios_Logo_new.webp',
        image3: '',

    },
];

function CardsGrid() {
    return ( <
        div className = "cards-grid" > {
            cardsData.map((card, index) => ( <
                CardComponent key = { index }
                image1 = { card.image1 }
                image2 = { card.image2 }
                image3 = { card.image3 }

                />
            ))
        } </div>
    );
}

export default CardsGrid;