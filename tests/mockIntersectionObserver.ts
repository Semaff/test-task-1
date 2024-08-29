const mockIntersectionObserver = () => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
};

export default mockIntersectionObserver;
