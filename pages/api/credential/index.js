import nextConnect from 'next-connect';
import passport from '../../../lib/passport';
import auth from '../../../middleware/auth';

const handler = nextConnect()

handler.use(auth).get(
    (req, res) => {
        passport.authenticate(
            'openidconnect',
            { failureRedirect: '/login', failureMessage: true }

        )(req, res);
    }
)

export default handler