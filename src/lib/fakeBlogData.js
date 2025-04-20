
const fakeBlogData = [
    {
        "id": 1,
        "title": "Mastering Next.js: A Beginner's Guide",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Learn how to build scalable web applications using Next.js in this beginner-friendly guide.",
        "description": "Next.js is a powerful React framework for building server-side rendered and static websites. In this guide, we will explore its key features, setup process, and how to create your first Next.js app.",
        "author": "John Doe",
        "date": "2024-03-21T14:30:00Z",
        "category": "Web Development"
    },
    {
        "id": 2,
        "title": "Understanding React Server Components",
        "image": "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Explore the power of React Server Components and how they improve performance and SEO.",
        "description": "React Server Components (RSC) allow developers to create highly performant applications by rendering components on the server. This article dives into how RSC works and its impact on modern web development.",
        "author": "Jane Smith",
        "date": "2024-03-18T09:15:00Z",
        "category": "Web Development"
    },
    {
        "id": 3,
        "title": "AI in 2024: The Future of Machine Learning",
        "image": "https://plus.unsplash.com/premium_photo-1682464651166-56902c08840c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Discover the latest trends in artificial intelligence and machine learning in 2024.",
        "description": "AI continues to evolve rapidly. From GPT models to AI-powered automation, this article explores the advancements in AI and how businesses are leveraging these technologies.",
        "author": "Alice Johnson",
        "date": "2024-03-15T12:45:00Z",
        "category": "AI & Machine Learning"
    },
    {
        "id": 4,
        "title": "Top 10 Programming Languages to Learn in 2024",
        "image": "https://images.unsplash.com/photo-1518818608552-195ed130cdf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "A detailed analysis of the best programming languages to learn in 2024.",
        "description": "Want to stay ahead in the tech industry? We have ranked the top 10 programming languages for 2024, including Python, JavaScript, Go, and Rust, based on job demand and industry growth.",
        "author": "Bob Williams",
        "date": "2024-03-10T16:20:00Z",
        "category": "Programming Languages"
    },
    {
        "id": 5,
        "title": "Cybersecurity Best Practices for Developers",
        "image": "https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Protect your applications with these essential cybersecurity practices every developer should know.",
        "description": "Security threats are on the rise. This article covers essential cybersecurity practices, including secure coding, authentication strategies, and encryption techniques for developers.",
        "author": "Emma Brown",
        "date": "2024-03-05T11:00:00Z",
        "category": "Cybersecurity"
    },
    {
        "id": 6,
        "title": "Building Mobile Apps with React Native",
        "image": "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Learn how to create cross-platform mobile apps using React Native.",
        "description": "React Native is the go-to framework for cross-platform mobile app development. This article walks through setting up a React Native project and building a simple mobile app.",
        "author": "David Miller",
        "date": "2024-02-28T13:10:00Z",
        "category": "Mobile Development"
    },
    {
        "id": 7,
        "title": "Blockchain Explained: A Beginner's Guide",
        "image": "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Understand how blockchain technology works and its impact on various industries.",
        "description": "Blockchain is revolutionizing industries from finance to healthcare. This guide explains the basics of blockchain, smart contracts, and their real-world applications.",
        "author": "Sophia Wilson",
        "date": "2024-02-22T08:50:00Z",
        "category": "Blockchain"
    }
]
const fakeBlogDataSub = [
    {
        "id": 1,
        "title": "The Role of UI/UX Design in Product Success",
        "image": "https://images.unsplash.com/photo-1635405050330-b0824eb1bf26?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Learn how to build scalable web applications using Next.js in this beginner-friendly guide.",
        "description": "Next.js is a powerful React framework for building server-side rendered and static websites. In this guide, we will explore its key features, setup process, and how to create your first Next.js app.",
        "author": "John Doe",
        "date": "2024-03-21T14:30:00Z",
        "category": "Web Development"
    },
    {
        "id": 2,
        "title": "How to Build a Career in Tech: Tips & Strategies",
        "image": "https://plus.unsplash.com/premium_photo-1678112179523-d5db7225dfcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Explore the power of React Server Components and how they improve performance and SEO.",
        "description": "React Server Components (RSC) allow developers to create highly performant applications by rendering components on the server. This article dives into how RSC works and its impact on modern web development.",
        "author": "Jane Smith",
        "date": "2024-03-18T09:15:00Z",
        "category": "Web Development"
    },
    {
        "id": 3,
        "title": "Game Development in 2024: Trends and Technologies",
        "image": "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Discover the latest trends in artificial intelligence and machine learning in 2024.",
        "description": "AI continues to evolve rapidly. From GPT models to AI-powered automation, this article explores the advancements in AI and how businesses are leveraging these technologies.",
        "author": "Alice Johnson",
        "date": "2024-03-15T12:45:00Z",
        "category": "AI & Machine Learning"
    },
    {
        "id": 4,
        "title": "Top 10 Programming Languages to Learn in 2024",
        "image": "https://images.unsplash.com/photo-1517503632222-64085e36227b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "A detailed analysis of the best programming languages to learn in 2024.",
        "description": "Want to stay ahead in the tech industry? We have ranked the top 10 programming languages for 2024, including Python, JavaScript, Go, and Rust, based on job demand and industry growth.",
        "author": "Bob Williams",
        "date": "2024-03-10T16:20:00Z",
        "category": "Programming Languages"
    },
    {
        "id": 5,
        "title": "Cybersecurity Best Practices for Developers",
        "image": "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Protect your applications with these essential cybersecurity practices every developer should know.",
        "description": "Security threats are on the rise. This article covers essential cybersecurity practices, including secure coding, authentication strategies, and encryption techniques for developers.",
        "author": "Emma Brown",
        "date": "2024-03-05T11:00:00Z",
        "category": "Cybersecurity"
    },
    {
        "id": 6,
        "title": "Building Mobile Apps with React Native",
        "image": "https://plus.unsplash.com/premium_photo-1681487865280-c2b836dd83e8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Learn how to create cross-platform mobile apps using React Native.",
        "description": "React Native is the go-to framework for cross-platform mobile app development. This article walks through setting up a React Native project and building a simple mobile app.",
        "author": "David Miller",
        "date": "2024-02-28T13:10:00Z",
        "category": "Mobile Development"
    },
    {
        "id": 7,
        "title": "Blockchain Explained: A Beginner's Guide",
        "image": "https://images.unsplash.com/photo-1644143379190-08a5f055de1d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "meta_description": "Understand how blockchain technology works and its impact on various industries.",
        "description": "Blockchain is revolutionizing industries from finance to healthcare. This guide explains the basics of blockchain, smart contracts, and their real-world applications.",
        "author": "Sophia Wilson",
        "date": "2024-02-22T08:50:00Z",
        "category": "Blockchain"
    }
]

 
const featureBlogData = [
    {
      "id": 1,
      "title": "Next.js 14: What's New and Exciting?",
      "image": "https://plus.unsplash.com/premium_photo-1676494236961-6f287c2eabda?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "meta_description": "Discover the latest features and improvements in Next.js 14, including server actions, faster builds, and more.",
      "description": "Next.js 14 brings incredible performance improvements, new server actions, and enhanced developer experience. In this blog, we dive into all the key updates and why they matter.",
      "author": "John Doe",
      "date": "2024-03-21T14:30:00Z",
      "category": "Web Development",
      "featured": true
    },
    {
      "id": 2,
      "title": "The Future of AI: GPT-5 and Beyond",
      "image": "https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?q=80&w=1327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "meta_description": "AI is evolving rapidly, and GPT-5 is on the horizon. Explore its expected capabilities and potential impact.",
      "description": "GPT-5 is rumored to revolutionize AI-generated content, automation, and problem-solving. This blog explores its expected improvements, ethical concerns, and industry applications.",
      "author": "Jane Smith",
      "date": "2024-03-18T09:15:00Z",
      "category": "AI & Machine Learning",
      "featured": true
    },
    {
      "id": 3,
      "title": "Top 5 Cybersecurity Threats in 2024",
      "image": "https://plus.unsplash.com/premium_photo-1663091633166-20ef12aa7b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "meta_description": "Stay ahead of the latest cybersecurity threats, from AI-driven attacks to zero-day exploits.",
      "description": "Cyber threats are becoming more advanced. Learn about AI-generated phishing, supply chain vulnerabilities, and how businesses can defend themselves in 2024.",
      "author": "Alice Johnson",
      "date": "2024-03-15T12:45:00Z",
      "category": "Cybersecurity",
      "featured": true
    },
    {
      "id": 4,
      "title": "React Native vs. Flutter: Which One to Choose?",
      "image": "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "meta_description": "Comparing React Native and Flutter for mobile app development in 2024. Which framework is better for your project?",
      "description": "Both React Native and Flutter have strengths and weaknesses. We compare performance, ecosystem, and development speed to help you make an informed decision.",
      "author": "Michael Anderson",
      "date": "2024-03-10T16:20:00Z",
      "category": "Mobile Development",
      "featured": true
    },
    {
      "id": 5,
      "title": "Mastering UI/UX Design: Tips from Experts",
      "image": "https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1265&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "meta_description": "Learn essential UI/UX design principles to create stunning and user-friendly interfaces.",
      "description": "Good UI/UX design is key to user satisfaction. This blog covers usability, color psychology, and best practices from industry experts.",
      "author": "Emma Brown",
      "date": "2024-03-05T11:00:00Z",
      "category": "UI/UX Design",
      "featured": true
    }
  ]
  

  const fakeVideoData = [
    {
      "id": 1,
      "title": "Mastering React in 30 Minutes",
      "description": "Learn the basics of React, including components, state, and props, in just 30 minutes!",
      "video_url": "https://www.example.com/videos/react-basics.mp4",
      "thumbnail": "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcozazlc6z72e3jnvabke.png",
      "category": "Web Development",
      "published_at": "2025-02-22T10:00:00Z",
      "author": {
        "name": "John Doe",
        "profile_image": "https://www.example.com/profiles/john-doe.jpg"
      }
    },
    {
      "id": 2,
      "title": "The Future of AI: What's Next?",
      "description": "Explore the latest advancements in artificial intelligence and what the future holds for AI technology.",
      "video_url": "https://www.example.com/videos/ai-future.mp4",
      "thumbnail": "https://www.simplilearn.com/ice9/free_resources_article_thumb/Future_Of_Artificial_Intelligence.jpg",
      "category": "AI & Machine Learning",
      "published_at": "2025-02-21T15:30:00Z",
      "author": {
        "name": "Jane Smith",
        "profile_image": "https://www.example.com/profiles/jane-smith.jpg"
      }
    },
    {
      "id": 3,
      "title": "How to Secure Your Website from Hackers",
      "description": "Discover essential cybersecurity practices to protect your website from attacks and data breaches.",
      "video_url": "https://www.example.com/videos/cybersecurity.mp4",
      "thumbnail": "https://www.hostitsmart.com/blog/wp-content/uploads/2021/12/best-practices-to-secure-your-website.jpg",
      "category": "Cybersecurity",
      "published_at": "2025-02-20T12:45:00Z",
      "author": {
        "name": "Alice Johnson",
        "profile_image": "https://www.example.com/profiles/alice-johnson.jpg"
      }
    },
    {
      "id": 4,
      "title": "Building a Mobile App with React Native",
      "description": "A step-by-step guide to building a fully functional mobile app using React Native.",
      "video_url": "https://www.example.com/videos/react-native-app.mp4",
      "thumbnail": "https://www.aceinfoway.com/blog/wp-content/uploads/2020/04/Why-should-you-choose-React-Native-for-your-next-Mobile-Development-Project.jpg",
      "category": "Mobile Development",
      "published_at": "2025-02-19T09:15:00Z",
      "author": {
        "name": "Michael Brown",
        "profile_image": "https://www.example.com/profiles/michael-brown.jpg"
      }
    },
    {
      "id": 5,
      "title": "Getting Started with Blockchain Development",
      "description": "An introduction to blockchain development, including smart contracts and decentralized applications.",
      "video_url": "https://youtu.be/gdiao7L9GjE?si=OjUTn3VNOtXmsS2G&t=11",
      "thumbnail": "https://www.xceltec.com/wp-content/uploads/2019/11/why-choose-block-chain.jpg",
      "category": "Blockchain",
      "published_at": "2025-02-18T17:20:00Z",
      "author": {
        "name": "Sophia Lee",
        "profile_image": "https://www.example.com/profiles/sophia-lee.jpg"
      }
    }
  ]
  

const fakeData = { fakeBlogData, fakeBlogDataSub,featureBlogData,fakeVideoData }

export default fakeData;