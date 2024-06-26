export default {
  apiResourceCourse: (course, discount_g = null, n_clases = 0) => {
    return {
      _id: course._id,
      slug: course.slug,
      user: {
        // Formatiamos al usuario
        _id: course.user._id,
        name: course.user.name,
        surname: course.user.surname,
        profession: course.user.profession,
        avatar: course.user.avatar
          ? process.env.URL_BACKEND +
            "/api/home/imagen-usuario/" +
            course.user.avatar
          : null,
      },
      title: course.title,
      state: course.state,
      level: course.level,
      idioma: course.idioma,
      vimeo_id: course.vimeo_id
        ? process.env.VIMEO_URL + course.vimeo_id
        : null,
      subtitle: course.subtitle,
      categorie: {
        // Formatiamos la categoria
        _id: course.categorie._id,
        title: course.categorie.title,
      },
      price_usd: course.price_usd,
      price_soles: course.price_soles,
      description: course.description,
      requirements: JSON.parse(course.requirements),
      who_is_it_for: JSON.parse(course.who_is_it_for),
      image: course.image
        ? process.env.URL_BACKEND + "/api/courses/imagen-course/" + course.image
        : null,
      discount_g: discount_g,
      n_clases: n_clases,
    };
  },
  apiResourceCourseLanding: (
    course,
    discount_g = null,
    malla_curricular = [],
    time_total_course = 0,
    files_total_sections = 0,
    count_course_instructor = 0,
    n_students = 0,
    avg_rating = 0,
    n_reviews = 0,
    nStudents_sum_total = 0,
    nReviews_sum_total = 0,
    avgRating_instructor = 0
  ) => {
    return {
      _id: course._id,
      slug: course.slug,
      user: {
        // Formatiamos al usuario
        _id: course.user._id,
        name: course.user.name,
        surname: course.user.surname,
        count_course: count_course_instructor,
        profession: course.user.profession,
        description: course.user.description,
        num_students: nStudents_sum_total,
        num_reviews: nReviews_sum_total,
        avg_rating: avgRating_instructor,
        avatar: course.user.avatar
          ? process.env.URL_BACKEND +
            "/api/home/imagen-usuario/" +
            course.user.avatar
          : null,
      },
      title: course.title,
      state: course.state,
      level: course.level,
      idioma: course.idioma,
      vimeo_id: course.vimeo_id
        ? process.env.VIMEO_URL + course.vimeo_id
        : null,
      subtitle: course.subtitle,
      categorie: {
        // Formatiamos la categoria
        _id: course.categorie._id,
        title: course.categorie.title,
      },
      price_usd: course.price_usd,
      price_soles: course.price_soles,
      description: course.description,
      requirements: JSON.parse(course.requirements),
      who_is_it_for: JSON.parse(course.who_is_it_for),
      image: course.image
        ? process.env.URL_BACKEND + "/api/courses/imagen-course/" + course.image
        : null,
      discount_g: discount_g,
      malla_curricular: malla_curricular,
      time_parse: time_total_course,
      files_count: files_total_sections,
      updatedAt: new Date(course.updatedAt)
        .toString()
        .replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, "$1 $2,$3"),
      n_students: n_students,
      avg_rating: avg_rating,
      n_reviews: n_reviews,
    };
  },
};
