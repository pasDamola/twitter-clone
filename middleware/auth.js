// import nuxtStorage from 'nuxt-storage';
export default function({ app, store, redirect }) {
  const token = app.$cookies.get('token');
  if (!token) {
    return redirect('/login');
  }
}
