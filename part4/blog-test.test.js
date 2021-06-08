const helperFuncs = require('./utils/helper_list');

const blogs = [
    {
        _id: '5a422a851b54a676234d17f7',
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    },
    {
        _id: '5a422b3a1b54a676234d17f9',
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
        __v: 0
    },
    {
        _id: '5a422b891b54a676234d17fa',
        title: 'First class tests',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
        likes: 10,
        __v: 0
    },
    {
        _id: '5a422ba71b54a676234d17fb',
        title: 'TDD harms architecture',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
        likes: 0,
        __v: 0
    },
    {
        _id: '5a422bc61b54a676234d17fc',
        title: 'Type wars',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
        likes: 2,
        __v: 0
    }  
];

describe('dummy', () => {
    test('returns 1', () => {
        expect(helperFuncs.dummy([])).toBe(1);
    });
});

describe('accumulate likes', () => {
    test('should return 36', () => {
        expect(helperFuncs.totalLikes(blogs)).toBe(36);
    });
    
});

describe('most liked blog post', () => {
    test('find the most liked one', () => {
        expect(helperFuncs.mostLiked(blogs)).toEqual(blogs[2]);
    });
});

describe('the most liked author', () => {
    test('Dijkstra mus come', () => {
        expect(helperFuncs.getLikes(blogs)).toEqual({author: 'Edsger W. Dijkstra', likes: 17});
    });
});

describe('the most blogs', () => {
    test('C. Martin should come up', () => {
        expect(helperFuncs.mostBlogs(blogs)).toEqual({author: 'Robert C. Martin', posts: 3});
    });
});