const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port);

const generateMoviesData = () => {
  return {
    movies: [
      {
        title: 'Nomadland',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
        id: 'nomadland',
        category: 'Best Picture',
      },
      {
        title: 'The Trial of the Chicago 7',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
        id: 'the-trial-of-the-chicago-7',
        category: 'Best Picture',
      },
      {
        title: 'Minari',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
        id: 'minari',
        category: 'Best Picture',
      },
      {
        title: 'Mank',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
        id: 'mank',
        category: 'Best Picture',
      },
      {
        title: 'One Night in Miami',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
        id: 'one-night-in-miami',
        category: 'Best Picture',
      },
      {
        title: 'Chloé Zhao for Nomadland',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
        id: 'chloe-zhao',
        category: 'Best Director',
      },
      {
        title: 'Aaron Sorkin for The Trial of the Chicago 7',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
        id: 'aaron-sorkin',
        category: 'Best Director',
      },
      {
        title: 'Lee Isaac Chung for Minari',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
        id: 'lee-isaac-chung',
        category: 'Best Director',
      },
      {
        title: 'David Fincher for Mank',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
        id: 'david-fincher',
        category: 'Best Director',
      },
      {
        title: 'Regina King for One Night in Miami',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
        id: 'regina-king',
        category: 'Best Director',
      },
      {
        title: "Chadwick Boseman for Ma Rainey's Black Bottom",
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/ma_raineys_black_bottom_ver2.jpg',
        id: 'chadwick-boseman',
        category: 'Best Actor',
      },
      {
        title: 'Anthony Hopkins for The Father',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/father_ver3.jpg',
        id: 'anthony-hopkins',
        category: 'Best Actor',
      },
      {
        title: 'Delroy Lindo for Da 5 Bloods',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/da_five_bloods_ver2.jpg',
        id: 'delroy-lindo',
        category: 'Best Actor',
      },
      {
        title: 'Steven Yeun for Minari',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
        id: 'steven-yeun',
        category: 'Best Actor',
      },
      {
        title: 'Riz Ahmed for The Sound of Metal',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/sound_of_metal_ver2.jpg',
        id: 'riz-ahmed',
        category: 'Best Actor',
      },
      {
        title: 'Vanessa Kirby for Pieces of a Woman',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg',
        id: 'vanessa-kirby',
        category: 'Best Actress',
      },
      {
        title: 'Frances McDormand for Nomadland',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
        id: 'frances-mcdormand',
        category: 'Best Actress',
      },
      {
        title: 'Carey Mulligan for Promising Young Woman',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/promising_young_woman_ver2.jpg',
        id: 'carey-mulligan',
        category: 'Best Actress',
      },
      {
        title: "Viola Davis for Ma Rainey's Black Bottom",
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/ma_raineys_black_bottom.jpg',
        id: 'viola-davis',
        category: 'Best Actress',
      },
      {
        title: 'Meryl Streep for The Prom',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/prom_ver2.jpg',
        id: 'meryl-streep',
        category: 'Best Actress',
      },

      {
        title: 'Daniel Kaluuya for Judas and the Black Messiah',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/judas_and_the_black_messiah.jpg',
        id: 'daniel-kaluuya',
        category: 'Best Supporting Actor',
      },
      {
        title: 'Leslie Odom, Jr. for One Night in Miami',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
        id: 'leslie-odom',
        category: 'Best Supporting Actor',
      },
      {
        title: 'Sacha Baron Cohen for The Trial of the Chicago 7',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
        id: 'sacha-baron-cohen',
        category: 'Best Supporting Actor',
      },
      {
        title: 'Stanley Tucci for Supernova',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/supernova.jpg',
        id: 'stanley-tucci',
        category: 'Best Supporting Actor',
      },
      {
        title: 'Chadwick Boseman for Da 5 Bloods',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/da_five_bloods_ver2.jpg',
        id: 'chadwick-boseman',
        category: 'Best Supporting Actor',
      },
      {
        title: 'Olivia Colman for The Father',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/father_ver3.jpg',
        id: 'olivia-coleman',
        category: 'Best Supporting Actress',
      },
      {
        title: 'Amanda Seyfried for Mank',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
        id: 'amanda-seyfried',
        category: 'Best Supporting Actress',
      },
      {
        title: 'Ellen Burstyn for Pieces of a Woman',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/pieces_of_a_woman.jpg',
        id: 'ellen-burstyn',
        category: 'Best Supporting Actress',
      },
      {
        title: 'Maria Bakalova for Borat Subsequent Moviefilm',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/borat_two_ver2.jpg',
        id: 'maria-bakalova',
        category: 'Best Supporting Actress',
      },
      {
        title: 'Yuh-jung Youn for Minari',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
        id: 'yuh-jung-youn',
        category: 'Best Supporting Actress',
      },
      {
        title: 'The Midnight Sky',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg',
        id: 'midnight-sky',
        category: 'Best Visual Effects',
      },
      {
        title: 'Tenet',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg',
        id: 'tenet',
        category: 'Best Visual Effects',
      },
      {
        title: 'Wonder Woman 1984',
        photoUrL:
          'https://variety.com/wp-content/uploads/2020/12/wonder_woman_nineteen_eighty_four_ver18.jpg',
        id: 'wonder-woman',
        category: 'Best Visual Effects',
      },
      {
        title: 'The Invisible Man',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/invisible_man.jpg',
        id: 'the-invisible-man',
        category: 'Best Visual Effects',
      },
      {
        title: 'Mulan',
        photoUrL: 'https://variety.com/wp-content/uploads/2020/12/minari-1.jpg',
        id: 'mulan',
        category: 'Best Visual Effects',
      },
    ],
  };
};

const movies = generateMoviesData();

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

console.log('App is listening on port ' + port);
