// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: 'http://localhost:5000/auth/google/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//        // profile contains the image in profile.photos[0].value
//     console.log('Google profile:', profile);
//     const profilePic = profile.photos?.[0]?.value;
//     // Save or return profilePic
//     return done(null, profile);
//     }
//   )
// );

// // Serialize and deserialize user
// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user);
// });


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User'); // Assuming you have a Mongoose User model

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const profilePic = profile.photos?.[0]?.value;

        // Check if user already exists
        let user = await User.findOne({ email });

        if (!user) {
          // Create new user
          user = await User.create({
            name,
            email,
            profilePic, // <-- save profile picture
          });
        } else {
          // Optionally update profile pic if changed
          if (user.profilePic !== profilePic) {
            user.profilePic = profilePic;
            await user.save();
          }
        }

        return done(null, user); // Send user to session
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Serialize user to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
