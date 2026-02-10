export const articlesCreate = async (req, res) => {
  try {
    const {
      title,
      content,
      description,
      summary,
      author,
      category,
      source,
      media,
      tags,
      state,
      publishedAt,
    } = req.body;

    const article = await News.create({
      title,
      content,
      description,
      summary,
      author,
      category,               // ✅ REQUIRED
      source: {
        name: source?.name,   // ✅ REQUIRED
        logo: source?.logo,
        url: source?.url,
        type: source?.type,
      },
      media: media || [],
      tags: tags || [],
      state: state || "draft",
      publishedAt,
    });

    res.status(201).json({
      message: "Article created successfully",
      data: article,
    });
  } catch (error) {
    console.error("CREATE ERROR 👉", error.message);
    res.status(500).json({
      message: "Article creation failed",
      error: error.message,
    });
  }
};
