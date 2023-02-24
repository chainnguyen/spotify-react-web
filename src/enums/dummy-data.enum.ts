import type { Playlist, TrackDetail } from '@/types/playlist'

export const PLAYLIST: Playlist[] = [
  {
    id: 'focus_123456789',
    type: 'focus',
    title: 'Focus',
    card_data: [
      {
        id: 'piano_12356',
        title: 'Peaceful Piano',
        color: '#68798A',
        image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
        description: 'Relax and indulge with beautiful piano pieces',
      },
      {
        id: 'deep_focus_12356',
        title: 'Deep Focus',
        color: '#404038',
        image: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5',
        description: 'Keep calm and focus with ambient and post-rock music.',
      },
      {
        id: 'instrumental_study_12356',
        title: 'Instrumental Study',
        color: '#777777',
        image: 'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c',
        description: 'Focus with soft study music in the background.',
      },
      {
        id: 'jazz_vibes_12356',
        title: 'Jazz Vibes',
        color: '#477D99',
        image: 'https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b',
        description: 'The original chill instrumental beats playlist.',
      },
      {
        id: 'focus_flow_12356',
        title: 'Focus Flow',
        color: '#C82030',
        image: 'https://i.scdn.co/image/ab67706f00000002724554ed6bed6f051d9b0bfc',
        description: 'Uptempo instrumental hip hop beats.',
      },
      {
        id: 'workday_lounge_12356',
        title: 'Workday Lounge',
        color: '#5E7C81',
        image: 'https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618',
        description: 'Lounge and chill out music for your workday.',
      },
      {
        id: 'beats_to_think_to_12356',
        title: 'Beats to think to',
        color: '#182040',
        image: 'https://i.scdn.co/image/ab67706f0000000296e08a91ef3c7a6e7bfaa9a6',
        description: 'Focus with deep techno and tech house.',
      },
      {
        id: 'reading_adventure_12356',
        title: 'Reading Adventure',
        color: '#383838',
        image: 'https://i.scdn.co/image/ab67706f00000002fee0aa7c6bfc815873e45f9e',
        description:
          'Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures.',
      },
      {
        id: 'relaxing_reading_12356',
        title: 'Relaxing Reading',
        color: '#777772',
        image: 'https://i.scdn.co/image/ab67706f00000002ba1149f135035bc23c4a7f25',
        description: 'Gentle instrumental music to help you relax while you read.',
      },
      {
        id: 'calm_before_the_storm_12356',
        title: 'Calm Before the Storm',
        color: '#486878',
        image: 'https://i.scdn.co/image/ab67706f00000002ea8a93a147716b5ce84897be',
        description: 'Aerial post-rock sounds to take you somewhere else.',
      },
    ],
  },
  {
    id: 'spotify_playlists_123456789',
    type: 'spotify_playlists',
    title: 'Spotify Playlists',
    card_data: [
      {
        id: 'today_12356',
        title: "Today's Top Hits",
        color: '#DC392B',
        image: 'https://i.scdn.co/image/ab67706f00000002ca22ddd6c22c8d2cdbeddc0a',
        description: 'PinkPantheress & Ice Spice are on top of the Hottest 50!',
      },
      {
        id: 'rap_caviar_12356',
        title: 'RapCaviar',
        color: '#A66911',
        image: 'https://i.scdn.co/image/ab67706f0000000282e8071e21e52e82f8330561',
        description: 'New music from Polo G, Don Toliver and A Boogie Wit da Hoodie.',
      },
      {
        id: 'all_out_2010s_12356',
        title: 'All Out 2010s',
        color: '#4000F0',
        image: 'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1',
        description: 'The biggest songs of the 2010s.',
      },
      {
        id: 'rock_classics_12356',
        title: 'Rock Classics',
        color: '#C82030',
        image: 'https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e',
        description:
          'Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters',
      },
      {
        id: 'chill_hits_12356',
        title: 'Chill Hits',
        color: '#687078',
        image: 'https://i.scdn.co/image/ab67706f0000000208ca740941aa65b5e205c361',
        description: 'Kick back to the best new and recent chill hits.',
      },
      {
        id: 'viva_latino_12356',
        title: 'Viva Latino',
        color: '#D92498',
        image: 'https://i.scdn.co/image/ab67706f0000000259a363fb9fa2cdf215c8fddc',
        description: "Today's top Latin hits, elevando nuestra música. Cover: TINI",
      },
      {
        id: 'mega_hit_mix_12356',
        title: 'Mega Hit Mix',
        color: '#6D797F',
        image: 'https://i.scdn.co/image/ab67706f00000002db32a17c1f5291b19317b62e',
        description: 'A mega mix of 75 favorites from the last few years!',
      },
      {
        id: 'all_out_80s_12356',
        title: 'All Out 80s',
        color: '#D72B8F',
        image: 'https://i.scdn.co/image/ab67706f0000000284a725e6f3d69525afd9e1a7',
        description: 'The biggest songs of the 1980s.',
      },
    ],
  },
]

export const TRACK_DETAIL: TrackDetail = {
  parent_id: 'deep_focus_12356',
  data: [
    {
      name: 'So Far So Good',
      track_file: '',
      release_date: '2023-02-14',
      track_duration: '2:31',
      quantity_liked: 123,
      album: {
        id: 'album_silent_hills',
        name: 'Silent Hills',
      },
      artist: {
        id: 'artist_sun_of_they',
        name: 'Sun Of They',
      },
    },
    {
      name: 'Apricity',
      track_file: '',
      release_date: '2023-02-14',
      track_duration: '2:38',
      quantity_liked: 23456,
      album: {
        id: 'album_apricity',
        name: 'Apricity',
      },
      artist: {
        id: 'artist_imala_zir',
        name: 'Imala Zir',
      },
    },
    {
      name: 'Solatium',
      track_file: '',
      release_date: '2023-02-14',
      track_duration: '2:06',
      quantity_liked: 4567,
      album: {
        id: 'album_solatium',
        name: 'Solatium',
      },
      artist: {
        id: 'artist_imber_sun',
        name: 'Imber Sun',
      },
    },
  ],
  pagination: {
    total: 10,
    total_track: 3,
    per_page: 10,
    current_page: 1,
  },
}
