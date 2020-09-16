import React, { useEffect, useRef, useState } from 'react';

const parseTimeRange = ranges =>
  ranges.length < 1
    ? {
        start: 0,
        end: 0,
      }
    : {
        start: ranges.start(0),
        end: ranges.end(0),
      };

export default ({
  src,
  autoPlay = false
}) => {
  const [state, setOrgState] = useState({
    buffered: {
      start: 0,
      end: 0,
    },
    time: 0,
    duration: 0,
    paused: true,
    waiting: false,
    playbackRate: 1,
    endedCallback: null,
  });
  const setState = partState => setOrgState({ ...state, ...partState });
  const ref = useRef(null);

  const element = React.createElement(
    'audio',
    {
      src,
      controls: false,
      ref,
      onPlay: () => setState({ paused: false }),
      onPause: () => setState({ paused: true }),
      onWaiting: () => setState({ waiting: true }),
      onPlaying: () => setState({ waiting: false }),
      onEnded: state.endedCallback,
      onDurationChange: () => {
        const el = ref.current;
        if (!el) {
          return;
        }
        const { duration, buffered } = el;
        setState({
          duration,
          buffered: parseTimeRange(buffered),
        });
      },
      onTimeUpdate: () => {
        const el = ref.current;
        if (!el) {
          return;
        }
        setState({ time: el.currentTime });
      },
      onProgress: () => {
        const el = ref.current;
        if (!el) {
          return;
        }
        setState({ buffered: parseTimeRange(el.buffered) });
      },
    }
  );

  const controls = {
    play: () => {
      const el = ref.current;
      if (!el) {
        return undefined;
      }
      return el.play();
    },
    pause: () => {
      const el = ref.current;
      if (el) {
        return el.pause();
      }
    },
    seek: time => {
      const el = ref.current;
      if (!el || state.duration === undefined) {
        return;
      }
      time = Math.min(state.duration, Math.max(0, time));
      el.currentTime = time || 0;
    },
    setEndedCallback: callback => {
      setState({ endedCallback: callback });
    },
    setVol: vol => {
      const el = ref.current;
      if (!el) {
        return undefined;
      }
      el.volume = vol;
    }
  };

  useEffect(() => {
    const el = ref.current;
    setState({
      paused: el.paused,
    });

    if (autoPlay && el.paused) {
      controls.play();
    }
  }, [src]);

  return { element, state, controls };
};