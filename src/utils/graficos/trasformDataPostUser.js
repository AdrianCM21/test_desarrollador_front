

export const transformDataPostUser = (posts,users)=>{
  const postCounts = posts.reduce((counts, post) => {
    counts[post.userId] = (counts[post.userId] || 0) + 1;
    return counts;
  }, {});
  
  const data = users.map(user => {
    return { labels: user.name, data: postCounts[user.id] || 0 };
  });

  return data;
};