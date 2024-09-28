#!/bin/bash

cd
cd ns/git/webui/src/webui
tmux new -s php -n php -d
tmux new-window -t php:1 -n php-exec -d
tmux new-window -t php:2 -n php-git -d
cd
cd ns/git/webui/src/webui/neo
tmux new -s neo -n neo -d
tmux new-window -t neo:1 -n neo-exec -d
tmux new-window -t neo:2 -n neo-git -d
cd
cd Documents/netskope/mf-inlineswg
tmux new -s cloudtap -n cloudtap -d
tmux new-window -t cloudtap:1 -n cloudtap-exec -d
tmux new-window -t cloudtap:2 -n cloudtap-git -d
cd
cd Documents/netskope/mf-profiles
tmux new -s mf-profiles -n mf-profiles -d
tmux new-window -t mf-profiles:1 -n mf-profiles-exec -d
tmux new-window -t mf-profiles:2 -n mf-profiles-git -d
