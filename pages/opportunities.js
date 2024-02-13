import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import styles from './Opportunity.module.css'; // Import CSS module

const Opportunity = () => {
  // State variables
  const [opportunities, setOpportunities] = useState([]); // Array to store fetched opportunities
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of opportunities per page
  const [searchTerm, setSearchTerm] = useState(''); // Search term state
  const [filterType, setFilterType] = useState('All'); // Filter type state
  const [sortType, setSortType] = useState('relevance'); // Sort type state
  const [sortOrder, setSortOrder] = useState('asc'); // Sort order state
  const [selectedOpportunity, setSelectedOpportunity] = useState(null); // Selected opportunity for detailed view
  const [selectedPlatform, setSelectedPlatform] = useState(''); // Selected platform for sharing
  const [bookmarks, setBookmarks] = useState([]); // Bookmarked opportunities
  const [showShareOptions, setShowShareOptions] = useState(false); // Share options state

  // Fetch opportunities from API
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        let url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAWLSszSHhIwWG_5yHtXxFKR1l40phx_Uk&cx=a3031634a79024d8f&q=conservation%20opportunities%Jobs%scholerships%https://www.jobinrwanda.com';
        if (searchTerm) {
          url += `&q=${encodeURIComponent(searchTerm)}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setOpportunities(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
        setError('Failed to fetch opportunities. Please try again later.');
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [searchTerm]);

  // Pagination function
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Handle items per page change
  const handleItemsPerPageChange = event => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset page to 1 when changing items per page
  };

  // Search functionality
  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset page to 1 when searching
  };

  // Filter messages based on filter type
  const filterMessages = {
    Rwanda: 'Biology, Zoology, Botany, Conservation opportunities found in Rwanda 2024',
    Jobs: 'Biology, Zoology, Botany, Conservation Jobs opportunities 2024',
    Internships: 'Biology, Zoology, Botany, Conservation  Internships opportunities 2024',
    Events: 'Biology, Zoology, Botany, Conservation and environmental upcomming event in Rwanda2024',
    'Environmental Opportunities': 'Biology, Zoology, Botany, Conservation opportunities found in Environmental Opportunities:',
    Ecology: 'Biology, Zoology, Botany, Conservation Ecology opportunities',
    Scholarships: 'Biology, Zoology, Botany, Conservation Scholarships opportunities',
    All: 'Biology, Zoology, Botany, Conservation global opportunities'
  };

  // Handling filter
  const handleFilter = type => {
    setFilterType(type);
    // Update search term with filter message
    setSearchTerm(filterMessages[type]);
    setCurrentPage(1); // Reset page to 1 when filtering
  };

  // Handling sorting
  const handleSort = type => {
    setSortType(type);
    setSortOrder('asc'); // Reset sort order when changing sort type
  };

  // Handling sort order change
  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  
    // Sort the opportunities list based on the new sort order
    const sortedOpportunities = [...opportunities].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (newSortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  
    setOpportunities(sortedOpportunities);
  };

  // Handling detailed view
  const handleDetailView = opportunity => {
    setSelectedOpportunity(opportunity);
  };
  
  // Clearing detailed view
  const clearDetailView = () => {
    setSelectedOpportunity(null);
  };

  // Bookmarking opportunity
  const handleBookmark = opportunity => {
    setBookmarks([...bookmarks, opportunity]);
    // Save bookmarks to localStorage
    localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, opportunity]));
  };

  // Remove bookmark
  const removeBookmark = bookmarkToRemove => {
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== bookmarkToRemove.id);
    setBookmarks(updatedBookmarks);
    // Update bookmarks in localStorage
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  // View bookmarked opportunities
  const viewBookmarks = () => {
    // Display bookmarked opportunities in a separate section or modal
  };
  
  const handleShare = opportunity => {
    setShowShareOptions(true);
    setSelectedOpportunity(opportunity);
    let shareUrl = '';
    switch (selectedPlatform) {
      case 'facebook':
        const facebookText = encodeURIComponent(`Check out this conservation opportunity from Biodiversity Nexus: ${opportunity.title}`);
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(opportunity.link)}`;
        break;
      case 'twitter':
        const shareText = encodeURIComponent(`Check out this conservation opportunity from Biodiversity Nexus: ${opportunity.title}`);
        shareUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(opportunity.link)}`;
        break;
      case 'whatsapp':
        const whatsappText = encodeURIComponent(`Check out this conservation opportunity from Biodiversity Nexus: ${opportunity.title}\n${opportunity.link}`);
        shareUrl = `https://api.whatsapp.com/send?text=${whatsappText}`;
        break;
      case 'email':
        const emailSubject = encodeURIComponent(`Check out this conservation opportunity from Biodiversity Nexus: ${opportunity.title}`);
        shareUrl = `mailto:?subject=${emailSubject}&body=${encodeURIComponent(opportunity.link)}`;
        break;
      default:
        break;
    }

    // Open sharing link in a new window
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className={styles.opportunityContainer}>
      <header>
        <Navigation /> {/* Include the Navigation component */}
      </header>
      <h1>Conservation Opportunities</h1>
      {/* Search bar */}
      <input type="text" placeholder="Search opportunities..." value={searchTerm} onChange={handleSearch} />
      {/* Filters */}
      <div className={styles.filters}>
        {Object.keys(filterMessages).map(type => (
          <button key={type} onClick={() => handleFilter(type)}>{type}</button>
        ))}
      </div>
      {/* Sort options */}
      <div className={styles.sortOptions}>
        <label>Sort By:</label>
        <select value={sortType} onChange={(e) => handleSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
        <button onClick={handleSortOrderChange}>Toggle Sort Order</button>
      </div>
      {/* Rendering based on loading, error, selected opportunity */}
      {loading ? (
        <p>Loading opportunities...</p>
      ) : error ? (
        <p>{error}</p>
      ) : selectedOpportunity ? (
        <div className={styles.detailedView}>
          {/* Detailed view of selected opportunity */}
          <h2>{selectedOpportunity.title}</h2>
          <p>{selectedOpportunity.snippet}</p>
          <p>URL: <a href={selectedOpportunity.link}>{selectedOpportunity.link}</a></p>
          <p>Published: {selectedOpportunity.displayLink}</p>
          <p>Description: {selectedOpportunity.htmlSnippet}</p>
          <button onClick={() => handleBookmark(selectedOpportunity)}>Bookmark</button>
          <button onClick={() => handleShare(selectedOpportunity)}>Share</button>
          <button onClick={clearDetailView}>Close</button>
          {/* Share options */}
          {showShareOptions && (
            <div className={styles.shareOptions}>
              <input type="radio" id="facebook" name="platform" value="facebook" onChange={() => setSelectedPlatform('facebook')} />
              <label htmlFor="facebook">Facebook</label>

              <input type="radio" id="twitter" name="platform" value="twitter" onChange={() => setSelectedPlatform('twitter')} />
              <label htmlFor="twitter">Twitter</label>

              <input type="radio" id="whatsapp" name="platform" value="whatsapp" onChange={() => setSelectedPlatform('whatsapp')} />
              <label htmlFor="whatsapp">WhatsApp</label>

              <input type="radio" id="email" name="platform" value="email" onChange={() => setSelectedPlatform('email')} />
              <label htmlFor="email">Email</label>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* List of opportunities */}
          <ul className={styles.opportunityList}>
            {opportunities.length > 0 ? (
              opportunities.map(opportunity => (
                <li key={opportunity.cacheId}>
                  <h3>{opportunity.title}</h3>
                  <p>{opportunity.snippet}</p>
                  <button onClick={() => handleDetailView(opportunity)}>View Details</button>
                  <button onClick={() => handleBookmark(opportunity)}>Bookmark</button>
                </li>
              ))
            ) : (
              <p>No opportunities found.</p>
            )}
          </ul>
          {/* Pagination */}
          <ul className={styles.pagination}>
            {Array.from({ length: Math.ceil(opportunities.length / itemsPerPage) }, (_, i) => (
              <li key={i} className={currentPage === i + 1 ? styles.active : ''}>
                <button onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
          {/* Bookmarks */}
          <div className={styles.bookmarksContainer}>
  <h2>Bookmarks</h2>
  <div>
        {bookmarks.length > 0 ? (
          bookmarks.map(bookmark => (
            <div key={bookmark.id} className={styles.bookmarkItem}>
              <h3 className={styles.bookmarkTitle}>{bookmark.title}</h3>
              <p className={styles.bookmarkSnippet}>{bookmark.snippet}</p>
              {/* View detail button */}
              <button className={styles.viewDetailButton} onClick={() => handleViewDetail(bookmark)}>View Detail</button>
              {/* Remove bookmark button */}
              <button className={styles.removeBookmarkButton} onClick={() => removeBookmark(bookmark)}>Remove Bookmark</button>
            </div>
      ))
    ) : (
      <p>No bookmarks found.</p>
    )}
  </div>
</div>
        </>
      )}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Opportunity;
